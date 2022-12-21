import React from "react"
import { useFormModal } from "./useFormModal"
import { TsPropTypes } from "../utils/types/TsPropTypes"
import { useSkills } from "./useSkills"
import { SkillType } from "../app/skills/domain/SkillType"

export function useCreateSkillModal() {
    const { 
        FormModal,
        FormContainer,
        hideModal,
        showModal,
        toggleModal,
        setVisibility,
        isVisible
    } = useFormModal<SkillType>()

    return {
        CreateSkillModal: (props: TsPropTypes<{ onSubmit?: (data: SkillType) => void }>) => {
            const { skillsActions } = useSkills()

            const submitHandler = async (data: SkillType) => {
                try {
                    await skillsActions.create(data)
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
                        <h2>Create Skill</h2>
                    </FormContainer>
                    <FormContainer>
                        <textarea name="icon" placeholder="SVG" required></textarea>
                        <input type="text" name="text" placeholder="Text" required/>
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