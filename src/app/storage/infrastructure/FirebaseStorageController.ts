import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "../../../firebase/firebase"
import { StorageBase } from "../domain/StorageBase"

export class FirebaseStorageController implements StorageBase {
    async uploadOne(path: string, file: File, filename?: string): Promise<boolean> {
        try {
            const storageRef = ref(storage, `${path}/${filename ?? file.name}`)
            await uploadBytes(storageRef, file)
            return true
        } catch (error) {
            return false
        }
    }
    
    async uploadMany(files: {path: string, filedata: File, filename?: string}[]): Promise<boolean[]> {
        const promiseArray = []
        for(let i = 0; files.length > i; i++) {
            promiseArray.push(this.uploadOne(files[i].path, files[i].filedata, files[i].filename))
        }
        return Promise.all(promiseArray)
    }
    
    async getUrl(filename: string): Promise<string> {
        try {
            return await getDownloadURL(ref(storage, filename))
        } catch (error) {
            return ""
        }
    }

    getManyUrl(filenames: string[]): Promise<string[]> {
        const promiseArray = []
        for(let i = 0; filenames.length > i; i++) {
            promiseArray.push(this.getUrl(filenames[i]))
        }
        return Promise.all(promiseArray)
    }

    async deleteOne(filename: string): Promise<boolean> {
        try {
            const storageRef = ref(storage, filename)
            await deleteObject(storageRef)
            return true
        } catch (error) {
            return false
        }
    }

    deleteMany(filenames: string[]): Promise<boolean[]> {
        const promiseArray = []
        for(let i = 0; filenames.length > i; i++) {
            promiseArray.push(this.deleteOne(filenames[i]))
        }
        return Promise.all(promiseArray)
    }
}