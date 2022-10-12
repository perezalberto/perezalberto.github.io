import { SkillBase } from "./SkillBase"
import { SkillType } from "./SkillType"

export interface SkillWithEventBase extends SkillBase {
    onSkillChange(observer: (changes: {type: "added" | "modified" | "removed", data: SkillType}[]) => void): { unsubscribe: () => void } 
}