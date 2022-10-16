import { SkillBase } from "../domain/SkillBase"
import { SkillType } from "../domain/SkillType"

export class SkillController implements SkillBase {

    protected controller: SkillBase

    constructor(controller: SkillBase) {
        this.controller = controller
    }

    create(skill: SkillType): Promise<string | undefined> {
        return this.controller.create(skill)
    }
    getById(id: string): Promise<({id: string} & SkillType) | undefined> {
        return this.controller.getById(id)
    }
    getList(limit?: number, page?: number): Promise<[] | ({id: string} & SkillType)[]> {
        return this.controller.getList(limit, page)
    }
    updateOne(id: string, data: Partial<SkillType>): Promise<boolean> {
        return this.controller.updateOne(id, data)
    }
    removeOne(id: string): Promise<boolean> {
        return this.controller.removeOne(id)
    }
}