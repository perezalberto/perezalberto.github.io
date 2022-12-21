export interface StorageBase {
    uploadOne(path: string, file: File, name?: string): Promise<boolean>
    uploadMany(files: {path: string, filedata: File, filename?: string}[]): Promise<boolean[]>
    getUrl(filename: string): Promise<string>
    getManyUrl(filenames: string[]): Promise<string[]>
    deleteOne(filename: string): Promise<boolean>
    deleteMany(filenames: string[]): Promise<boolean[]>
}