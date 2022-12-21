import React from "react"
import { SkillType } from "../../app/skills/domain/SkillType"
import { TsPropTypes } from "../../utils/types/TsPropTypes"

function SkillItem(props: TsPropTypes<SkillType>) {
    return (
        <div className="skills-item" key={Math.floor(Math.random() * 10000000)}>
            <div className="skills-item-icon" dangerouslySetInnerHTML={{__html: props.icon}}></div>
            <div className="skills-item-text">{props.text}</div>
        </div>
    )
}

export default SkillItem