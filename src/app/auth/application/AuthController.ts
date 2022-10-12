import { AuthBase } from "../domain/AuthBase"

export abstract class AuthController implements AuthBase {
    
    protected controller: AuthBase

    constructor(controller: AuthBase) {
        this.controller = controller
    }

    public logout(): Promise<boolean> {
        return this.controller.logout()
    }
}