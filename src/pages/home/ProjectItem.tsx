import React from "react"
import { ProjectRemoteType } from "../../app/projects/domain/ProjectRemoteType"
import Button, { ButtonStyle } from "../../components/Button"
import EarthIcon from "../../components/icons/EarthIcon"
import GithubIcon from "../../components/icons/GithubIcon"
import MagnifyingGlassIcon from "../../components/icons/MagnifyingGlassIcon"
import { useImageModal } from "../../hooks/useImageModal"
import { TsPropTypes } from "../../utils/types/TsPropTypes"

function ProjectItem(props:TsPropTypes<ProjectRemoteType>) {
    const {ImageModal, showModal} = useImageModal(props.imageFullSizeUrl)

    const redirect = (url: string) => {
        location.href = url
    }

    return (
        <article className="project-item">
            <div className="project-image">
                <img src={props.imagePreviewUrl} alt=" "/>
                <div className="project-type">
                    {props.projectType}
                </div>
                <div className="image-overlay">
                    <a href="#" onClick={(e) => {e.preventDefault(); showModal()}} className="image-overlay-button">
                        <MagnifyingGlassIcon />
                    </a>
                </div>
            </div>
            <div className="project-content">
                <div className="project-langs">
                    {props.langs.split(",").map(lang => (
                        <div className="project-lang-item" key={lang}>
                            {lang}
                        </div>
                    ))}
                </div>
                <div className="project-text">
                    {props.text}
                </div>
                <div className="project-actions">
                    {props.website && <Button onClick={() => redirect(`${props.website}`)} style={ButtonStyle.ACCENT} icon={<EarthIcon/>}>Website</Button>}
                    {props.repository && <Button onClick={() => redirect(`${props.repository}`)} style={props.website ? ButtonStyle.PRIMARY : ButtonStyle.ACCENT} icon={<GithubIcon/>}>Repository</Button>}
                </div>
            </div>
            <ImageModal/>
        </article>
    )
}

export default ProjectItem