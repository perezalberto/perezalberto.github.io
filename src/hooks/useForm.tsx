import React, { ReactNode, useRef } from "react"
import { TsPropTypes } from "../utils/types/TsPropTypes"

export enum ContentDirection {
    ROW = "form-container-row",
    COLUMN = "form-container-column",
}

export function useForm<T extends object = {[key: string]: string | File}>() {
    return {
        Form: (props: {onSubmit : (data: T) => void, children: ReactNode}) => {

            const formRef = useRef(null)

            const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault()
                const submitedData:{[key: string]: string | File | null} = {}

                const elements = e.currentTarget.elements

                for(let i = 0; elements.length > i; i++) {
                    let key = ""
                    let value: string | File | null

                    if(elements[i].tagName === "INPUT") {
                        if(elements[i].getAttribute("type") === "file") {
                            key = (elements[i] as HTMLInputElement).name
                            value = ((elements[i] as HTMLInputElement).files ?? [null])[0]
                        }else{
                            key = (elements[i] as HTMLInputElement).name
                            value = (elements[i] as HTMLInputElement).value
                        }
                    }else if(elements[i].tagName === "TEXTAREA") {
                        key = (elements[i] as HTMLTextAreaElement).name
                        value = (elements[i] as HTMLTextAreaElement).value
                    }else {
                        continue
                    }


                    submitedData[key] = value
                }
                props.onSubmit(submitedData as T)
            }

            return (
                <form onSubmit={submitHandler} ref={formRef} className="form">
                    {props.children}
                </form>
            )
        },
        FormContainer: (props: TsPropTypes<{direction?: ContentDirection}>) => (
            <div className={`form-container${props.direction ? " " + props.direction : ""}`}>
                {props.children}
            </div>
        ),
    }
}