import { ServiceBase } from "./ServiceBase"
import { Store, AnyAction} from "redux"
import { addSkill, removeSkill, setSkillsStatus, updateSkill } from "../store/slices/skillsSlice"
import { StatusEnum } from "../app/common/domain/StatusEnum"
import { SkillWithEventBase } from "../app/skills/domain/SkillWithEventBase"
import { ControllerFactory } from "../app/common/infrastructure/ControllerFactory"

export class SkillService extends ServiceBase {

    protected controller: SkillWithEventBase
    protected unsubscribe?: () => void

    constructor(store: Store<unknown, AnyAction>) {
        super(store)
        this.controller = ControllerFactory.skillControllers().skillWithEventController()
    }

    async start(): Promise<void> {
        this.store.dispatch(setSkillsStatus(StatusEnum.LOADING))
        this.unsubscribe = this.controller.onSkillChange(observer => {
            observer.forEach(changes => {
                switch(changes.type) {
                case "added":
                    this.store.dispatch(addSkill(changes.data))
                    break
                case "modified":
                    this.store.dispatch(updateSkill(changes.data))
                    break
                case "removed":
                    this.store.dispatch(removeSkill(changes.data.id))
                    break
                default:
                    throw new Error("Unexpected error")
                }
            })
            this.store.dispatch(setSkillsStatus(StatusEnum.OK))
        }).unsubscribe
    }

    stop(): void {
        if(this.unsubscribe) {
            this.unsubscribe()
        }
    }
}