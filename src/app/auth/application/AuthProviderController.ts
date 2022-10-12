import { AuthProviderBase } from "../domain/AuthProviderBase"
import { AuthProviderEnum } from "../domain/AuthProviderEnum"
import { UserDataType } from "../domain/UserDataType"
import { AuthController } from "./AuthController"

export class AuthProviderController extends AuthController implements AuthProviderBase {
    constructor(controller: AuthProviderBase){
        super(controller)
    }

    loginWithAuthProvider(provider: AuthProviderEnum): Promise<UserDataType> {
        return (this.controller as AuthProviderBase).loginWithAuthProvider(provider)
    }
}