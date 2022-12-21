import React, { useState } from "react"
import { ProjectRemoteType } from "../../app/projects/domain/ProjectRemoteType"
import AddActions from "../../components/WithActions"
import { ButtonStyle } from "../../components/Button"
import TrashIcon from "../../components/icons/TrashIcon"
import Sections from "../../components/Section"
import { useProjects } from "../../hooks/useProjects"
import { TsPropTypes } from "../../utils/types/TsPropTypes"
import ProjectItem from "./ProjectItem"
import { useAuth } from "../../hooks/useAuth"
import PlusIcon from "../../components/icons/PlusIcon"
import { useCreateProjectModal } from "../../hooks/useCreateProjectModal"
import { StatusEnum } from "../../app/common/domain/StatusEnum"
import LoadingIcon from "../../components/icons/LoadingIcon"
import { useDialogModal } from "../../hooks/useDialogModal"

function Projects() {
    const { projectsState, projectsActions } = useProjects()
    const { authState } = useAuth()
    const ProjectItemWithActions = AddActions<TsPropTypes<ProjectRemoteType>>(ProjectItem)
    const createProjectModal = useCreateProjectModal()
    const dialogModal = useDialogModal("Are you sure to delete the project?")
    const [porjectId, setProjectId] = useState<string | undefined>(undefined)

    return (
        <Sections title="Projects" anchor="projects" className="section-projects">
            <>
                {projectsState.list.map(project => authState.loggedIn ? (
                    <ProjectItemWithActions data={project} actions={[
                        {
                            onClick: () => {
                                setProjectId(project.id)
                                dialogModal.showModal()
                            },
                            icon: <TrashIcon />,
                            style: ButtonStyle.RED
                        }
                    ]} key={project.id} />
                ) : <ProjectItem {...project} key={project.id} />
                )}
                {projectsState.status === StatusEnum.LOADING &&
                    <div className="project-item-dashed"><LoadingIcon/></div>
                }
                {authState.loggedIn &&
                    <a href="#" onClick={(e) => { e.preventDefault(); createProjectModal.showModal() }} className="project-item-dashed">
                        <PlusIcon />
                    </a>
                }
                <createProjectModal.CreateProjectModal />
                <dialogModal.DialogModal onAccept={() => {
                    porjectId && projectsActions.remove(porjectId)
                    dialogModal.hideModal()
                }}/>
            </>
        </Sections>
    )
}

export default Projects