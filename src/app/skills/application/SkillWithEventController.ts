import { SkillType } from "../domain/SkillType"
import { SkillWithEventBase } from "../domain/SkillWithEventBase"
import { SkillController } from "./SkillController"

export class SkillWithEventController extends SkillController implements SkillWithEventBase {
    constructor(controller: SkillWithEventBase) {
        super(controller)
    }
    
    onSkillChange(observer: (changes: { type: "added" | "modified" | "removed"; data: SkillType }[]) => void): { unsubscribe: () => void } {
        return (this.controller as SkillWithEventBase).onSkillChange(observer)
    }
}