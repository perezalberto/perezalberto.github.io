export type ProjectType = {
    imagePreview: File,
    imageFullSize: File,
    text: string,
    projectType: string,
    langs: [string],
    website?: string,
    repository: string,
}