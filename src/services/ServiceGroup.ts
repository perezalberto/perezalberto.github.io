import { ServiceBase } from "./ServiceBase"
import { Store, AnyAction} from "redux"

export class ServiceGroup extends ServiceBase{

    private services: ServiceBase[]

    constructor(store:Store<unknown, AnyAction>,services: (new(store: Store<unknown, AnyAction>) => ServiceBase)[]) {
        super(store)
        this.services = services.map(service => new service(store))
    }

    start(): void {
        this.services.forEach(service => service.start())
    }

    stop(): void {
        this.services.forEach(service => service.stop())
    }
}