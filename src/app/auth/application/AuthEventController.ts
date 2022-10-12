import { AuthEventBase } from "../domain/AuthEventBase"
import { UserDataType } from "../domain/UserDataType"
import { AuthController } from "./AuthController"

export class AuthEventController extends AuthController implements AuthEventBase {
    constructor(controller: AuthEventBase){
        super(controller)
    }

    onAuthStateChange(observer: (user?: UserDataType | undefined) => void): { unsubscribe: () => void } {
        return (this.controller as AuthEventBase).onAuthStateChange(observer)
    }
}