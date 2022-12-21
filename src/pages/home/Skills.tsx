import React, { useState } from "react"
import {useSkills} from "../../hooks/useSkills"

import Section from "../../components/Section"
import WithActions from "../../components/WithActions"
import { SkillType } from "../../app/skills/domain/SkillType"
import SkillItem from "./SkillItem"
import { TsPropTypes } from "../../utils/types/TsPropTypes"
import TrashIcon from "../../components/icons/TrashIcon"
import { ButtonStyle } from "../../components/Button"
import { useAuth } from "../../hooks/useAuth"
import PlusIcon from "../../components/icons/PlusIcon"
import { StatusEnum } from "../../app/common/domain/StatusEnum"
import LoadingIcon from "../../components/icons/LoadingIcon"
import { useDialogModal } from "../../hooks/useDialogModal"
import { useCreateSkillModal } from "../../hooks/useCreateSkillModal"

function Skills() {
    const {skillsState, skillsActions} = useSkills()
    const {authState} = useAuth()
    const createSkillModal = useCreateSkillModal()
    const SkillItemWithActions = WithActions<TsPropTypes<SkillType>>(SkillItem)
    const dialogModal = useDialogModal("Are you sure to delete the skill?")
    const [skillId, setSkillId] = useState<string | undefined>(undefined)

    return (
        <Section title="Skills" anchor="skills">
            <article className="article-skills">
                {skillsState.list.map((skill) => authState.loggedIn ? (
                    <SkillItemWithActions data={skill} key={skill.id} actions={
                        [
                            {
                                onClick: () => {
                                    setSkillId(skill.id)
                                    dialogModal.showModal()
                                },
                                icon: <TrashIcon />,
                                style: ButtonStyle.RED
                            }
                        ]
                    } />
                ) : <SkillItem {...skill} key={skill.id} />
                )}
                {skillsState.status === StatusEnum.LOADING &&
                    <div className="skills-item-dashed"><LoadingIcon/></div>
                }
                {authState.loggedIn && 
                    <a href="#" onClick={(e) => { e.preventDefault(); createSkillModal.showModal() }} className="skills-item-dashed">
                        <PlusIcon/>
                    </a>
                }
            </article>
            <createSkillModal.CreateSkillModal />
            <dialogModal.DialogModal onAccept={() => {
                skillId && skillsActions.remove(skillId)
                dialogModal.hideModal()
            }}/>
        </Section>
    )
}

export default Skills