export class ImageEdit {
    private file: File

    constructor(file: File) {
        if (file && file["type"].split("/")[0] === "image") {
            this.file = file
        } else {
            throw new Error(
                "File must be an image: ImageEdit error"
            )
        }
    }

    async resize(maxWidth: number, maxHeight: number, quality?: number): Promise<File | null> {
        let resultFile: File | null = null

        const image = new Image()
        const canvas = document.createElement("canvas")
        const canvasContext = canvas.getContext("2d")

        resultFile = await new Promise((resolve, reject) => {
            image.onload = async () => {
                const height = image.naturalHeight
                const width = image.naturalWidth

                const imageRatio = width / height
                const resizeRatio = maxWidth / maxHeight

                let newWidth = 0
                let newHeight = 0

                if (resizeRatio > imageRatio) {
                    newHeight = Math.floor(maxHeight)
                    newWidth = Math.floor(maxHeight / imageRatio)
                } else {
                    newWidth = Math.floor(maxWidth)
                    newHeight = Math.floor(maxWidth / imageRatio)
                }

                canvas.width = newWidth
                canvas.height = newHeight

                canvasContext?.drawImage(image, 0, 0, newWidth, newHeight)

                if (quality) {
                    if (quality > 1) quality = 1
                    if (quality < 0) quality = 0
                } else {
                    quality = 1
                }
                canvas.toBlob(
                    (blob) => {
                        if (blob) {
                            resolve(
                                new File([blob], this.file.name, {
                                    type: this.file.type,
                                })
                            )
                            return
                        } else {
                            reject()
                        }
                    },
                    "image/jpeg",
                    quality
                )
            }
            image.src = URL.createObjectURL(this.file)
        })

        return resultFile
    }
}
