import { AuthBase } from "./AuthBase"
import { UserDataType } from "./UserDataType"

export interface AuthEmailAndPasswordBase extends AuthBase{
    loginWithEmailAndPassword(credentials: {email: string, password: string}): Promise<UserDataType>
}