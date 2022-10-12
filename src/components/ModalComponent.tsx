import React from "react"
import ReactDOM from "react-dom"
import { TsPropTypes } from "../utils/types/TsPropTypes"

import "./ModalComponent.scss"

const ModalComponent = ({ children, isOpen, handleClose, overlay }: TsPropTypes<{ overlay?: boolean, isOpen: boolean, handleClose: () => void }>) => (
    isOpen ? ReactDOM.createPortal(
        <React.Fragment>
            <>
                {overlay && <div className="modal-overlay"></div>}
                <div className="modal-wrapper">
                    <div className="modal">
                        <button onClick={handleClose} className="modal-close">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                            </svg>
                        </button>
                        <div className="modal-container">
                            {children}
                        </div>
                    </div>
                </div>
            </>
        </React.Fragment>, document.body
    ) : null)


export default ModalComponent