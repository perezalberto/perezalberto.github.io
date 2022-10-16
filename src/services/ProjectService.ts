import { ServiceBase } from "./ServiceBase"
import { Store, AnyAction} from "redux"
import { addProject, removeProject, updateProject, setProjectsStatus } from "../store/slices/projectsSlice"
import { StatusEnum } from "../app/common/domain/StatusEnum"
import { ProjectWithEventBase } from "../app/projects/domain/ProjectWithEventBase"
import { ControllerFactory } from "../app/common/infrastructure/ControllerFactory"

export class ProjectService extends ServiceBase {

    protected controller: ProjectWithEventBase
    protected unsubscribe?: () => void

    constructor(store: Store<unknown, AnyAction>) {
        super(store)
        this.controller = ControllerFactory.projectControllers().projectWithEventController()
    }

    start(): void {
        this.store.dispatch(setProjectsStatus(StatusEnum.LOADING))
        this.unsubscribe = this.controller.onProjectChange(observer => {
            observer.forEach(changes => {
                switch(changes.type) {
                case "added":
                    this.store.dispatch(addProject(changes.data))
                    break
                case "modified":
                    this.store.dispatch(updateProject(changes.data))
                    break
                case "removed":
                    this.store.dispatch(removeProject(changes.data.id))
                    break
                default:
                    throw new Error("Unexpected error")
                }
            })
            this.store.dispatch(setProjectsStatus(StatusEnum.OK))
        }).unsubscribe
    }

    stop(): void {
        if(this.unsubscribe) {
            this.unsubscribe()
        }
    }
}