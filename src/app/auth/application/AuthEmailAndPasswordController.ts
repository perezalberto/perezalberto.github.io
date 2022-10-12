import { AuthEmailAndPasswordBase } from "../domain/AuthEmailAndPasswordBase"
import { UserDataType } from "../domain/UserDataType"
import { AuthController } from "./AuthController"

export class AuthEmailAndPasswordController extends AuthController implements AuthEmailAndPasswordBase {
    constructor(controller: AuthEmailAndPasswordBase){
        super(controller)
    }

    loginWithEmailAndPassword(credentials: { email: string; password: string; }): Promise<UserDataType> {
        return (this.controller as AuthEmailAndPasswordBase).loginWithEmailAndPassword(credentials)
    }
}