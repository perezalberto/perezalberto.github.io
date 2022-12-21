import React from "react"
import { ProjectType } from "../app/projects/domain/ProjectType"
import { useFormModal } from "./useFormModal"
import { TsPropTypes } from "../utils/types/TsPropTypes"
import { useProjects } from "./useProjects"
import InputImage from "../components/InputImage"

export function useCreateProjectModal() {
    const { 
        FormModal,
        FormContainer,
        hideModal,
        showModal,
        toggleModal,
        setVisibility,
        isVisible
    } = useFormModal<ProjectType>()

    return {
        CreateProjectModal: (props: TsPropTypes<{ onSubmit?: (data: ProjectType) => void }>) => {
            const { projectsActions } = useProjects()

            const submitHandler = async (data: ProjectType) => {
                try {
                    await projectsActions.create(data)
                } catch (error) {
                    console.log(error)
                }
                if(props.onSubmit) {
                    props.onSubmit(data)
                }
            }

            return(
                <FormModal onSubmit={submitHandler}>
                    <FormContainer>
                        <h2>Create Project</h2>
                    </FormContainer>
                    <FormContainer>
                        <InputImage name="image" previewName="imagePreview"/>
                        <input type="text" name="projectType" placeholder="Project type" required/>
                        <input type="text" name="langs" placeholder="javascript,HTML,CSS" pattern="^[\w.:;!@#$%^&*\-_=+]+(,[\w.:;!@#$%^&*\-_=+]+)*$" required/>
                        <input type="text" name="website" placeholder="http://www.website.com/" pattern="^((?:https\:\/\/)|(?:http\:\/\/)|(?:www\.))?([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\??)[a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~]+)$"/>
                        <input type="text" name="repository" placeholder="https://github.com/user/repository" required/>
                        <textarea name="text" placeholder="Describe" required></textarea>
                    </FormContainer>
                </FormModal>
            )
        },
        hideModal,
        showModal,
        toggleModal,
        setVisibility,
        isVisible
    }
}
