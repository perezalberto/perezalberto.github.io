import { CSSProperties } from "react"
import XmarkIcon from "../components/icons/XmarkIcon"
import { useModal } from "./useModal"

const closeButtonStyles: CSSProperties = {
    color: "white",
    position: "absolute",
    top: "1.25rem",
    right: "1.25rem",
    fontSize: "1.5rem",
    padding: "0.75em calc(0.75em + 0.125em) calc(0.75em + 0.125em)",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "calc(1em - 0.125em)",
    height: "1em",
    backgroundColor: "rgba(255,255,255,0.2)"
}

export function useImageModal(image: string) {
    const { ModalComponent, hideModal, showModal, toggleModal, setVisibility, isVisible } = useModal()

    return {
        ImageModal: () => (
            <ModalComponent>
                <img src={image} alt="" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                <a href="#" onClick={(e) => { e.preventDefault(); hideModal() }} style={closeButtonStyles}><XmarkIcon /></a>
            </ModalComponent>
        ),
        setVisibility,
        showModal,
        hideModal,
        toggleModal,
        isVisible
    }
}