import { ProjectRemoteType } from "./ProjectRemoteType"
import { ProjectType } from "./ProjectType"

export interface ProjectBase {
    create(project: ProjectType): Promise<string | undefined>
    getById(id: string): Promise<({id: string} & ProjectRemoteType) | undefined>
    getList(lim?:number, page?:number): Promise<({id: string} & ProjectRemoteType)[] | []>
    updateOne(id: string, data: Partial<ProjectType>): Promise<boolean>
    removeOne(id: string): Promise<boolean>
}