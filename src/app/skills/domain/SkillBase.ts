import { SkillType } from "./SkillType"

export interface SkillBase {
    create(skill: SkillType): Promise<string | undefined>
    getById(id: string): Promise<SkillType | undefined>
    getList(lim?:number, page?:number): Promise<SkillType[] | []>
    updateOne(id: string, data: Partial<SkillType>): Promise<boolean>
    removeOne(id: string): Promise<boolean>
}