import React from "react"
import Button, { ButtonStyle, ButtonType } from "../components/Button"
import { TsPropTypes } from "../utils/types/TsPropTypes"
import { useForm } from "./useForm"
import { useModal } from "./useModal"

export function useFormModal<T extends object = { [key: string]: string | FileList }>() {
    const { Form, FormContainer } = useForm<T>()
    const { ModalComponent, hideModal, showModal, toggleModal, setVisibility, isVisible } = useModal({styles: {container: {minWidth: "350px"}}})

    return {
        FormModal: (props: TsPropTypes<{ onSubmit: (data: T) => void }>) => (
            <ModalComponent>
                <div style={{maxWidth: "400px"}}>
                    <Form onSubmit={(data) => {props.onSubmit(data); hideModal()}}>
                        {props.children}
                        <div className="form-container form-container-row">
                            <Button type={ButtonType.SUBMIT} style={ButtonStyle.ACCENT}>SUBMIT</Button>
                            <Button type={ButtonType.BUTTON} style={ButtonStyle.PRIMARY} onClick={hideModal}>CLOSE</Button>
                        </div>
                    </Form>
                </div>
            </ModalComponent>
        ),
        FormContainer,
        setVisibility,
        showModal,
        hideModal,
        toggleModal,
        isVisible
    }
}
