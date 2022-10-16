import { ProjectController } from "../application/ProjectController"
import { ProjectWithEventController } from "../application/ProjectWithEventController"
import { FirestoreProjectController } from "./FirestoreProjectController"

export class ProjectControllers {
    private controller: FirestoreProjectController

    constructor() {
        this.controller = new FirestoreProjectController()
    }

    projectController(): ProjectController {
        return new ProjectController(this.controller)
    }

    projectWithEventController(): ProjectWithEventController {
        return new ProjectWithEventController(this.controller)
    }
}