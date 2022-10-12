import { StorageBase } from "../domain/StorageBase"

export class StorageController implements StorageBase {
    private controller: StorageBase

    constructor(controller: StorageBase) {
        this.controller = controller
    }
     
    async uploadOne(path: string, file: File): Promise<boolean> {
        return this.controller.uploadOne(path, file)
    }
    
    uploadMany(files: {path: string, filedata: File}[]): Promise<boolean[]> {
        return this.controller.uploadMany(files)
    }
    
    async getUrl(filename: string): Promise<string> {
        if (!filename)return ""
        return this.controller.getUrl(filename)
    }

    getManyUrl(filenames: string[]): Promise<string[]> {
        return this.controller.getManyUrl(filenames.filter(f => !!f))
    }

    async deleteOne(filename: string): Promise<boolean> {
        if (!filename)return false
        return this.controller.deleteOne(filename)
    }

    deleteMany(filenames: string[]): Promise<boolean[]> {
        return this.controller.deleteMany(filenames.filter(f => !!f))
    }
}