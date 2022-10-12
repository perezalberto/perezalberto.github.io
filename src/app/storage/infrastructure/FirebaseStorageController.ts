import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { storage } from "../../../firebase/firebase"
import { StorageBase } from "../domain/StorageBase"

export class FirebaseStorageController implements StorageBase {
    
    async uploadOne(path: string, file: File): Promise<boolean> {
        try {
            const storageRef = ref(storage, `${path}/${file.name}`)
            await uploadBytesResumable(storageRef, file)
            return true
        } catch (error) {
            return false
        }
    }
    
    uploadMany(files: {path: string, filedata: File}[]): Promise<boolean[]> {
        const promiseArray = []
        for(let i = 0; files.length > i; i++) {
            promiseArray.push(this.uploadOne(files[i].path, files[i].filedata))
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