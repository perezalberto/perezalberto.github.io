import { addDoc, collection, deleteDoc, doc, documentId, getDocs, limit, onSnapshot, query, QueryConstraint, startAt, updateDoc, where } from "firebase/firestore"
import { firestore } from "../../../firebase/firebase"
import { SkillType } from "../domain/SkillType"
import { SkillWithEventBase } from "../domain/SkillWithEventBase"

export class FirestoreSkillController implements SkillWithEventBase {
    async create(skill: SkillType): Promise<string | undefined> {
        try {
            const docRef = await addDoc(collection(firestore, "skills"), skill)
            return docRef.id
        } catch (error) {
            return undefined
        }
    }
    async getById(id: string): Promise<({id: string} & SkillType) | undefined> {
        try {
            const project = (await getDocs(query(
                collection(firestore, "skills"),
                where(documentId(), "==", id),
            ))).docs?.[0]

            return { id: project.id ,...project.data() as SkillType }
        } catch (e) {
            return undefined
        }
    }

    async getList(lim = 0, page = 0): Promise<[] | ({ id: string } & SkillType)[]> {
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
                    collection(firestore, "skills"),
                    ...queryConstraintList
                )
            )).docs.map((item) => ({ ...item.data() as SkillType, id: item.id }))
        } catch (e) {
            return []
        }
    }
    async updateOne(id: string, data: Partial<SkillType>): Promise<boolean> {
        try {
            await updateDoc(doc(firestore, "skills", id), data)
            return true
        } catch (e) {
            return false
        }
    }

    async removeOne(id: string): Promise<boolean> {
        try {
            await deleteDoc(doc(firestore, "skills", id))
            return true
        } catch (e) {
            return false
        }
    }

    onSkillChange(observer: (changes: { type: "added" | "modified" | "removed", data: {id: string} & SkillType }[]) => void): { unsubscribe: () => void } {
        const unsubscribe = onSnapshot(query(collection(firestore, "skills")), (snapshot) => {
            const changesArray:{type: "added" | "modified" | "removed", data: {id: string} & SkillType}[] = []
            snapshot.docChanges().forEach((change) => {
                changesArray.push({ type: change.type, data: {id: change.doc.id, ...(change.doc.data() as SkillType)} })
            })
            observer(changesArray)
        })
        return {unsubscribe}
    }
}