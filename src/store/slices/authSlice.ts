import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StatusEnum } from "../../app/common/domain/StatusEnum"

export type AuthState = {
    status: StatusEnum,
    isSignedIn: boolean,
    error?: string
}

const initialState: AuthState = {
    status: StatusEnum.OK,
    isSignedIn: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setSignedIn: (state) => {
            state.isSignedIn = true
            state.status = StatusEnum.OK
        },

        setSignedOut: (state) => {
            state.isSignedIn = false
            state.status = StatusEnum.OK
        },

        setStatus: (state, action: PayloadAction<StatusEnum>) => {
            state.status = action.payload
        },

        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    },
})

export const {
    setSignedIn,
    setSignedOut,
    setStatus,
    setError,
} = authSlice.actions

export default authSlice.reducer
