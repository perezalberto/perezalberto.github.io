import React, { useState } from "react"
import { TsPropTypes } from "../utils/types/TsPropTypes"
import ModalComponent from "./ModalComponent"

export enum InputType {
    CHECKBOX = "checkbox",
    COLOR = "color",
    DATE = "date",
    DATETIME_LOCAL = "datetime-local",
    EMAIL = "email",
    FILE = "file",
    HIDDEN = "hidden",
    IMAGE = "image",
    MONTH = "month",
    NUMBER = "number",
    PASSWORD = "password",
    RADIO = "radio",
    RANGE = "range",
    RESET = "reset",
    SEARCH = "search",
    SUBMIT = "submit",
    TEL = "tel",
    TEXT = "text",
    TIME = "time",
    URL = "url",
    WEEK = "week",
    TEXTAREA = "textarea",
}

export enum ButtonStyle {
    PRIMARY = "btn-primary",
    SECONDARY = "btn-secondary",
    ACCENT = "btn-accent",
    OK = "btn-ok",
    ERROR = "btn-error",
}

type ModalFormComponentProps = {
    overlay?: boolean,
    isOpen?: boolean,
    title: string,
    buttons: [
        {
            id: string
            value: string,
            action: React.MouseEventHandler<HTMLButtonElement>,
            style: ButtonStyle,
            icon?: JSX.Element,
        }
    ]
}

function ModalFormComponent({ isOpen, overlay, buttons, title, children }: TsPropTypes<ModalFormComponentProps>) {
    const [visible, setVisible] = useState(!!isOpen)

    const handleClose = () => {
        setVisible(!visible)
    }

    return (
        <ModalComponent handleClose={handleClose} isOpen={visible} overlay={overlay}>
            <>
                <div className="modal-title">
                    <h2>{title}</h2>
                </div>
                <div className="modal-content">
                    {children}
                </div>
                <div className="modal-buttons">
                    {buttons.map(button => (
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                button.action(e)
                            }}
                            id={button.id}
                            key={button.id}
                            className={`btn ${button.style}`}
                        >
                            {button.icon}{button.value}
                        </button>
                    ))}
                    <button onClick={handleClose}>close</button>
                </div>
            </>
        </ModalComponent>
    )
}

export default ModalFormComponent
