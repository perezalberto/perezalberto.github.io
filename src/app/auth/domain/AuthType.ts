import { AuthStatusEnum } from "./AuthStatusEnum"
import { UserDataType } from "./UserDataType"

export type AuthType = {
    loggedIn: boolean,
    status: AuthStatusEnum,
    message: string,
    userData?: UserDataType
}