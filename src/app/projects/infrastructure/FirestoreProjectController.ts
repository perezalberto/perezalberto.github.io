import { ProjectRemoteType } from "../domain/ProjectRemoteType"
import { ProjectType } from "../domain/ProjectType"
import { StorageController } from "../../storage/application/StorageController"
import { addDoc, collection, documentId, getDocs, query, where, limit, startAt, QueryConstraint, updateDoc, doc, deleteDoc, onSnapshot } from "firebase/firestore"
import { firestore } from "../../../firebase/firebase"
import { ProjectWithEventBase } from "../domain/ProjectWithEventBase"
import { ControllerFactory } from "../../common/infrastructure/ControllerFactory"
import { randomString } from "../../../utils/randomString"

export class FirestoreProjectController implements ProjectWithEventBase {

    private storage: StorageController

    constructor() {
        this.storage = new StorageController(ControllerFactory.storageControllers().storageController())
    }

    /**
     * Create a project
     * @param {ProjectType} project
     * @returns return project id
     */
    async create(project: ProjectType): Promise<string | undefined> {

        const randomPrefix = randomString(10)

        const isUploaded = await this.storage.uploadMany([
            {
                path: "projects/preview",
                filedata: project.imagePreview,
                filename: `${randomPrefix}${project.imagePreview.name}`
            },
            {
                path: "projects",
                filedata: project.image,
                filename: `${randomPrefix}${project.image.name}`,
            }
        ])

        if (!isUploaded.every(e => e === true)) {
            const toRemove = [
                `projects/preview/${randomPrefix}${project.imagePreview.name}`,
                `projects/${randomPrefix}${project.image.name}`
            ].filter((_, index) => isUploaded[index])
            await this.storage.deleteMany(toRemove)
            return undefined
        }

        const urls = await this.storage.getManyUrl([
            `projects/preview/${randomPrefix}${project.imagePreview.name}`,
            `projects/${randomPrefix}${project.image.name}`,
        ])

        const projectItemRemoteData: ProjectRemoteType = {
            imagePreviewUrl: urls[0],
            imageFullSizeUrl: urls[1],
            imagePreviewName: `${randomPrefix}${project.imagePreview.name}`,
            imageFullSizeName: `${randomPrefix}${project.image.name}`,
            langs: project.langs || "",
            text: project.text || "",
            website: project.website || "",
            repository: project.repository || "",
            projectType: project.projectType || "",
        }

        try {
            const docRef = await addDoc(collection(firestore, "projects"), projectItemRemoteData)
            return docRef.id
        } catch (error) {
            console.log(error)
            const toRemove = [
                `projects/preview/${randomPrefix}${project.imagePreview.name}`,
                `projects/${randomPrefix}${project.image.name}`
            ]
            await this.storage.deleteMany(toRemove)
            return undefined
        }
    }

    /**
     * Get ProjectRemoteType from project id
     * @param {string} id project ID
     * @returns return a ProjectRemoteType
     */
    async getById(id: string): Promise<({id: string} & ProjectRemoteType) | undefined> {
        try {
            const project = (await getDocs(query(
                collection(firestore, "projects"),
                where(documentId(), "==", id),
            ))).docs?.[0]

            return { id: project.id, ...project.data() as ProjectRemoteType }
        } catch (e) {
            return undefined
        }
    }

    /**
     * Get a list of ProjectRemoteType
     * @param {number} lim number of elements to return. default 0 = no limit
     * @param {number} page page of elements. Start at 0. default 0
     * @returns array of ProjectRemoteType
     */
    async getList(lim = 0, page = 0): Promise<({id: string} & ProjectRemoteType)[] | []> {
        try {
            const queryConstraintList:QueryConstraint[] = []

            if (lim > 0) {
                if (page < 0) {
                    page = 0
                }
                let at = (lim * page)
                if (at < 0) {
                    at = 0
                }
                queryConstraintList.push(startAt(at),limit(lim))
            }

            return (await getDocs(
                query(
                    collection(firestore, "projects"),
                    ...queryConstraintList
                )
            )).docs.map((item) => ({ ...item.data() as ProjectRemoteType, id: item.id }))
        } catch (e) {
            return []
        }
    }

    /**
     * Update a project
     * @param {string} id Project ID
     * @param data data to update
     * @returns return true if update is ok
     */
    async updateOne(id: string, data: Partial<ProjectType>): Promise<boolean> {
        const updateData: Partial<ProjectRemoteType> = {
            ...(data.text !== undefined && {text: data.text}),
            ...(data.langs !== undefined && {langs: data.langs}),
            ...(data.projectType !== undefined && {projectType: data.projectType}),
            ...(data.repository !== undefined && {repository: data.repository}),
            ...(data.website !== undefined && {website: data.website}),
        }

        const updateImageFunc = async (path?: string, currentImageName?: string, newImage?: File) => {
            const updatePromiseList = []
            
            if (path === undefined) path = ""
            if (newImage === undefined) return
            
            if (currentImageName !== undefined){
                updatePromiseList.push(this.storage.deleteOne(`${path}/${currentImageName}`))
            }

            updatePromiseList.push(this.storage.uploadOne(path, newImage))
            const result = await Promise.all(updatePromiseList)
            
            if(result[result.length - 1] === true) {
                return this.storage.getUrl(`${path}/${newImage.name}`)
            }
            return undefined
        }

        const currentData = await this.getById(id)
        
        const updatePromiseArray = []
        updatePromiseArray.push(updateImageFunc("projects/preview", currentData?.imagePreviewName, data.imagePreview))
        updatePromiseArray.push(updateImageFunc("projects", currentData?.imageFullSizeName, data.image))
        const urls = await Promise.all(updatePromiseArray)

        const imageData: Partial<ProjectRemoteType> = {
            ...(urls[0] !== undefined && {imagePreviewName: currentData?.imagePreviewName, imagePreviewUrl: urls[0]}),
            ...(urls[1] !== undefined && {imageFullSizeName: currentData?.imageFullSizeName, imageFullSizeUrl: urls[1]}),
        }

            
        try {
            await updateDoc(doc(firestore, "projects", id), {
                ...imageData,
                ...updateData,
            })
            return true
        } catch (e) {
            return false
        }
    }

    /**
     * Remove a project
     * @param {string} id Project ID
     * @returns Return true if project was removed
     */
    async removeOne(id: string): Promise<boolean> {
        try {
            const projectDoc = await this.getById(id)

            if (projectDoc === undefined) return false
            const toRemove = [
                `projects/preview/${projectDoc.imagePreviewName}`,
                `projects/${projectDoc.imageFullSizeName}`
            ]
            await Promise.all([
                this.storage.deleteMany(toRemove),
                deleteDoc(doc(firestore, "projects", id)),
            ])
            return true
        } catch (e) {
            return false
        }
    }
    
    /**
     * Get projects on add, update and remove from database
     * @param observer on project change
     * @returns Return a unsubscribe function
     */
    onProjectChange(observer: (changes: { type: "added" | "modified" | "removed", data: {id: string} & ProjectRemoteType }[]) => void): { unsubscribe: () => void } {
        const unsubscribe = onSnapshot(query(collection(firestore, "projects")), (snapshot) => {
            const changesArray:{type: "added" | "modified" | "removed", data: {id: string} & ProjectRemoteType}[] = []
            snapshot.docChanges().forEach((change) => {
                changesArray.push({ type: change.type, data: {id: change.doc.id, ...(change.doc.data() as ProjectRemoteType)} })
            })
            observer(changesArray)
        })
        return {unsubscribe}
    }
}