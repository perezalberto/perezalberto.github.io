import { ProjectRemoteType } from "../domain/ProjectRemoteType"
import { ProjectWithEventBase } from "../domain/ProjectWithEventBase"
import { ProjectController } from "./ProjectController"

export class ProjectWithEventController extends ProjectController implements ProjectWithEventBase {
    constructor(controller: ProjectWithEventBase) {
        super(controller)
    }

    onProjectChange(observer: (changes: { type: "added" | "modified" | "removed"; data: ({id: string} & ProjectRemoteType) }[]) => void): { unsubscribe: () => void } {
        return (this.controller as ProjectWithEventBase).onProjectChange(observer)
    }
}