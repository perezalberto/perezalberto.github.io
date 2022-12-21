import { MouseEvent } from "react"
import Button, { ButtonStyle, ButtonType } from "../components/Button"
import CheckIcon from "../components/icons/CheckIcon"
import { TsPropTypes } from "../utils/types/TsPropTypes"
import { useModal } from "./useModal"

export function useDialogModal(text: string) {
    const { ModalComponent, hideModal, showModal, toggleModal, setVisibility, isVisible } = useModal()

    return {
        DialogModal: (props: TsPropTypes<{
            onAccept?: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void,
            onClose?: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void,
        }>) => (
            <ModalComponent>
                <div style={{padding: "0.5em"}}>
                    <p style={{color: "white"}}>{text}</p>
                    <div style={{display: "flex", gap: "0.5em"}}>
                        <Button icon={<CheckIcon/>}
                            style={ButtonStyle.ACCENT}
                            type={ButtonType.BUTTON}
                            onClick={props.onAccept}>
                            Accept
                        </Button>
                        <Button icon={<CheckIcon/>}
                            style={ButtonStyle.PRIMARY}
                            type={ButtonType.BUTTON}
                            onClick={(e) => {hideModal(); props.onClose && props.onClose(e)}}>
                            Close
                        </Button>
                    </div>
                </div>
            </ModalComponent>
        ),
        setVisibility,
        showModal,
        hideModal,
        toggleModal,
        isVisible,
    }
}