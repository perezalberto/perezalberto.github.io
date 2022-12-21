import React from "react"
import { TsPropTypes } from "../utils/types/TsPropTypes"
import LoadingIcon from "./icons/LoadingIcon"

export enum ButtonStyle {
    PRIMARY = "btn-primary",
    ACCENT = "btn-accent",
    SUCCESS = "btn-success",
    ERROR = "btn-error",
    RED = "btn-red",
    GREEN = "btn-green",
    BLUE = "btn-blue",
    YELLOW = "btn-yellow"
}

export enum ButtonType {
    BUTTON = "button",
    SUBMIT = "submit",
    RESET = "reset"
}

function Button(props: TsPropTypes<{
    type?: ButtonType,
    style?: ButtonStyle,
    icon?: JSX.Element,
    loading?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}>) {
    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.onClick !== undefined && props.onClick(event)
    }
    return (
        <button onClick={onClickHandler} className={`btn ${props.style}`} type={props.type ?? ButtonType.BUTTON}>
            {props.loading ?
                <LoadingIcon />
                :
                <>
                    {props.icon && (props.children ? <span className="mr-2">{props.icon}</span> : props.icon)}
                    {props.children}
                </>
            }
        </button>
    )
}

export default Button