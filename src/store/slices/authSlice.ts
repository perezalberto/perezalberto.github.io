import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AuthType } from "../../app/auth/domain/AuthType"
import { StatusEnum } from "../../app/common/domain/StatusEnum"

export type AuthStateType = AuthType

const initialState: AuthType = {
    status: StatusEnum.OK,
    loggedIn: localStorage.getItem("isSignedIn") === "true"
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoggedIn: (state) => {
            localStorage.setItem("isSignedIn", "true")
            state.loggedIn = true
            state.status = StatusEnum.OK
            state.message = undefined
        },

        setLoggedOut: (state) => {
            localStorage.setItem("isSignedIn", "false")
            state.loggedIn = false
            state.status = StatusEnum.OK
            state.message = undefined
        },

        setAuthStatus: (state, action: PayloadAction<StatusEnum>) => {
            state.status = action.payload
        },

        setAuthMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload
        },
    },
})

export const {
    setLoggedIn,
    setLoggedOut,
    setAuthStatus,
    setAuthMessage,
} = authSlice.actions

export default authSlice.reducer
