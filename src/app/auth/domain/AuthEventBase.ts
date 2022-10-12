import { AuthBase } from "./AuthBase"
import { UserDataType } from "./UserDataType"

export interface AuthEventBase extends AuthBase{
    onAuthStateChange(observer: (user?: UserDataType) => void): {unsubscribe: () => void}
}