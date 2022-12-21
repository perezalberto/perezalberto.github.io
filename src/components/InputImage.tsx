import React, { useRef, useState } from "react"
import { ImageEdit } from "../utils/ImageEdit"
import { TsPropTypes } from "../utils/types/TsPropTypes"

function InputImage(props: TsPropTypes<{
    name: string,
    previewName: string,
    required?: boolean,
    src?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}>) {

    const [file, setFile] = useState<File | null>(null)
    const previewInputRef = useRef<HTMLInputElement>(null)

    let currentSrc = props.src ?? ""

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile((e.target.files ?? [])[0])
        const imageEdit = new ImageEdit((e.target.files ?? [])[0])
        const previewImage = await imageEdit.resize(800, 800, 0.8)
        const dt = new DataTransfer()
        if (previewInputRef.current && previewImage) {
            dt.items.add(previewImage)
            previewInputRef.current.files = dt.files
            currentSrc = ""
        }
        if (props.onChange) {
            props.onChange(e)
        }
    }

    return (
        <div className="image-input">
            <div className="image-container">
                <img src={(file && URL.createObjectURL(file)) ?? currentSrc} alt=" " className="image-input-preview"/>
            </div>
            <label className="file-input">
                <input type={"file"} name={props.name} required={props.required} onChange={onChange} accept="image/png, image/jpeg" />
                <input type={"file"} name={props.previewName} ref={previewInputRef}/>
                <span className="file-input-button">select file</span>
                <span className="file-input-value">{(file?.name ?? "Select image")}</span>
            </label>
        </div>
    )
}

export default InputImage