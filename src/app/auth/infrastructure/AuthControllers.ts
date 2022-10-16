import { AuthController } from "../application/AuthController"
import { AuthEmailAndPasswordController } from "../application/AuthEmailAndPasswordController"
import { AuthEventController } from "../application/AuthEventController"
import { AuthProviderController } from "../application/AuthProviderController"
import { FirebaseAuthController } from "./FirebaseAuthController"

export class AuthControllers {

    private controller: FirebaseAuthController

    constructor(){
        this.controller = new FirebaseAuthController()
    }

    authController(): AuthController  {
        return new AuthController(this.controller)
    }

    authEmailAndPasswordController(): AuthEmailAndPasswordController  {
        return new AuthEmailAndPasswordController(this.controller)
    }

    AuthEventController(): AuthEventController  {
        return new AuthEventController(this.controller)
    }

    AuthProviderController(): AuthProviderController  {
        return new AuthProviderController(this.controller)
    }
}