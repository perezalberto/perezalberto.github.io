import { AuthBase } from "./AuthBase"
import { AuthProviderEnum } from "./AuthProviderEnum"
import { UserDataType } from "./UserDataType"

export interface AuthProviderBase extends AuthBase{
    loginWithAuthProvider(provider: AuthProviderEnum): Promise<UserDataType>
}