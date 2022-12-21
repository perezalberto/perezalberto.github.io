import React, { useState, CSSProperties, useEffect } from "react"
import ReactDOM from "react-dom"
import { TsPropTypes } from "../utils/types/TsPropTypes"

export function useModal(
    modifiers?:{
    styles?:{
        overlay?: CSSProperties,
        container?: CSSProperties
    },
    classNames?:{
        overlay?: string,
        container?: string
    }}){
    const [isVisible, setVisibility] = useState(false)

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isVisible])

    const overlayDefaultStyle: CSSProperties = {
        top:"0",
        left:"0",
        right:"0",
        bottom:"0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        zIndex: "10000",
    }

    const defaultClassNames = modifiers?.classNames || {
        container: "modal-container",
        overlay: "modal-overlay"
    }

    return {
        isVisible,
        setVisibility: setVisibility,
        showModal() {
            setVisibility(true)
        },
        hideModal() {
            setVisibility(false)
        },
        toggleModal() {
            setVisibility(!isVisible)
        },
        ModalComponent(props: TsPropTypes) {
            return (
                isVisible ? ReactDOM.createPortal(
                    <React.Fragment>
                        <>
                            <div className={defaultClassNames.overlay} style={{...modifiers?.styles?.overlay, ...overlayDefaultStyle}} onClick={() => setVisibility(false)}>
                                <div className={defaultClassNames.container} style={modifiers?.styles?.container} onClick={(e)=>e.stopPropagation()}>
                                    {props.children}
                                </div>
                            </div>
                        </>
                    </React.Fragment>, document.body
                ) : null)
        }
    }
}