import { SkillBase } from "./SkillBase"
import { SkillType } from "./SkillType"

export interface SkillWithEventBase extends SkillBase {
    onSkillChange(observer: (changes: {type: "added" | "modified" | "removed", data: ({id: string} & SkillType)}[]) => void): { unsubscribe: () => void } 
}