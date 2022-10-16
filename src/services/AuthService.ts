import { AnyAction, Store } from "@reduxjs/toolkit"
import { AuthEventBase } from "../app/auth/domain/AuthEventBase"
import { ControllerFactory } from "../app/common/infrastructure/ControllerFactory"
import { setLoggedIn, setLoggedOut } from "../store/slices/authSlice"
import { ServiceBase } from "./ServiceBase"

export class AuthService extends ServiceBase {

    protected controller: AuthEventBase
    protected unsubscribe?: () => void

    constructor(store: Store<unknown, AnyAction>) {
        super(store)
        this.controller = ControllerFactory.authControllers().AuthEventController()
    }

    start(): void {
        this.unsubscribe = this.controller.onAuthStateChange(user => {
            if(user){
                this.store.dispatch(setLoggedIn())
            }else{
                this.store.dispatch(setLoggedOut())
            }
        }).unsubscribe
    }

    stop(): void {
        if(this.unsubscribe) {
            this.unsubscribe()
        }
    }
}