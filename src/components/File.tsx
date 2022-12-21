import React, { useState } from "react"
import { TsPropTypes } from "../utils/types/TsPropTypes"

function File(props: TsPropTypes<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type">>) {
    const [fileList, setFileList] = useState<FileList | null>(null)

    const fileProps = {
        type: "file",
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setFileList(e.target.files)
            if(props.onChange){
                props.onChange(e)
            }
        },
        ...props
    }

    return (
        <label className="file-input">
            <input {...fileProps} />
            <span className="file-input-button">select file</span>
            <span className="file-input-value">{Array.from(fileList ?? []).map(file => file.name).join(", ")}</span>
        </label>
    )
}

export default File