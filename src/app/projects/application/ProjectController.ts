import { ProjectBase } from "../domain/ProjectBase"
import { ProjectRemoteType } from "../domain/ProjectRemoteType"
import { ProjectType } from "../domain/ProjectType"

export class ProjectController implements ProjectBase {

    protected controller: ProjectBase

    constructor(controller: ProjectBase) {
        this.controller = controller
    }
    
    create(project: ProjectType): Promise<string | undefined> {
        return this.controller.create(project)
    }

    getById(id: string): Promise<({id: string} & ProjectRemoteType) | undefined> {
        return this.controller.getById(id)
    }

    getList(lim?: number | undefined, page?: number | undefined): Promise<({id: string} & ProjectRemoteType)[] | []> {
        return this.controller.getList(lim, page)
    }

    updateOne(id: string, data: Partial<ProjectType>): Promise<boolean> {
        return this.controller.updateOne(id, data)
    }
    
    removeOne(id: string): Promise<boolean> {
        return this.controller.removeOne(id)
    }
}