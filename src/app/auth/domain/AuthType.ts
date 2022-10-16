import { StatusEnum } from "../../common/domain/StatusEnum"
import { UserDataType } from "./UserDataType"

export type AuthType = {
    loggedIn: boolean,
    status: StatusEnum,
    message?: string,
    userData?: UserDataType
}