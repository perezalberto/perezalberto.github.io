export interface StorageBase {
    uploadOne(path: string, file: File): Promise<boolean>
    uploadMany(files: {path: string, filedata: File}[]): Promise<boolean[]>
    getUrl(filename: string): Promise<string>
    getManyUrl(filenames: string[]): Promise<string[]>
    deleteOne(filename: string): Promise<boolean>
    deleteMany(filenames: string[]): Promise<boolean[]>
}