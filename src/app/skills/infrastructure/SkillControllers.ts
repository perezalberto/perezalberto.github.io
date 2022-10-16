import { SkillController } from "../application/SkillController"
import { SkillWithEventController } from "../application/SkillWithEventController"
import { FirestoreSkillController } from "./FirestoreSkillController"

export class SkillControllers {
    private controller: FirestoreSkillController

    constructor() {
        this.controller = new FirestoreSkillController()
    }

    skillController(): SkillController {
        return new SkillController(this.controller)
    }

    skillWithEventController(): SkillWithEventController {
        return new SkillWithEventController(this.controller)
    }
}