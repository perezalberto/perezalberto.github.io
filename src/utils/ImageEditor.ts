export class ImageEditor {
    file: File
    image: HTMLImageElement
  
    constructor(file: File) {
        this.file = file
        this.image = new Image()
    }
  
    async resize(width: number, height: number): Promise<File> {
        return new Promise((resolve, reject) => {
            this.image.onload = () => {
                // determine the aspect ratio of the original image
                const aspectRatio = this.image.width / this.image.height
  
                // set the width and height to maintain the aspect ratio
                if (width / height > aspectRatio) {
                    width = height * aspectRatio
                } else {
                    height = width / aspectRatio
                }
  
                // create a canvas element
                const canvas = document.createElement("canvas")
                const ctx = canvas.getContext("2d")
  
                // set canvas dimensions
                canvas.width = width
                canvas.height = height
                
                // check if the canvas context is null
                if (!ctx) {
                    reject(new Error("Error getting canvas context."))
                    return
                }
  
                // draw the image to the canvas
                ctx.drawImage(this.image, 0, 0, width, height)
  
                // get the data URL of the resized image
                const resizedImageDataUrl = canvas.toDataURL()
  
                // convert the data URL to a blob
                const resizedImageBlob = this.dataURLtoBlob(resizedImageDataUrl)
  
                // create a File object with the resized image
                const resizedImageFile = new File([resizedImageBlob], this.file.name)
  
                resolve(resizedImageFile)
            }
            this.image.onerror = reject
            this.image.src = URL.createObjectURL(this.file)
        })
    }
  
    async crop(x: number, y: number, width: number, height: number): Promise<File> {
        return new Promise((resolve, reject) => {
            this.image.onload = () => {
                // create a canvas element
                const canvas = document.createElement("canvas")
                const ctx = canvas.getContext("2d")
  
                // set canvas dimensions
                canvas.width = width
                canvas.height = height

                // check if the canvas context is null
                if (!ctx) {
                    reject(new Error("Error getting canvas context."))
                    return
                }
  
                // draw a portion of the image to the canvas
                ctx.drawImage(this.image, x, y, width, height, 0, 0, width, height)
  
                // get the data URL of the cropped image
                const croppedImageDataUrl = canvas.toDataURL()
  
                // convert the data URL to a blob
                const croppedImageBlob = this.dataURLtoBlob(croppedImageDataUrl)
  
                // create a File object with the cropped image
                const croppedImageFile = new File([croppedImageBlob], this.file.name)
  
                resolve(croppedImageFile)
            }
            this.image.onerror = reject
            this.image.src = URL.createObjectURL(this.file)
        })
    }
    
    private dataURLtoBlob(dataURL: string): Blob {
        // split the data URL into the data part and the MIME type
        const parts = dataURL.split(";base64,")
        const mimeType = parts[0].split(":")[1]
        const base64 = parts[1]
      
        // create a typed array from the base-64 string
        const base64Array = new Uint8Array(base64.length)
        for (let i = 0; i < base64.length; i++) {
            base64Array[i] = base64.charCodeAt(i)
        }
      
        // return the typed array as a blob
        return new Blob([base64Array], {type: mimeType})
    }
}

  