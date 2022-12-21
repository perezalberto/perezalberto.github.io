import { useSelector, useDispatch } from "react-redux"
import { AuthProviderEnum } from "../app/auth/domain/AuthProviderEnum"
import { StatusEnum } from "../app/common/domain/StatusEnum"
import { ControllerFactory } from "../app/common/infrastructure/ControllerFactory"
import { AuthStateType, setAuthMessage, setAuthStatus } from "../store/slices/authSlice"
import { RootStateType } from "../store/store"

export function useAuth() {
    const userState = useSelector<RootStateType, AuthStateType>(state => state.auth)
    const dispatch = useDispatch()

    return {authState: userState, authActions:{
        async loginWithEmailAndPassword(email: string, password: string) {
            if(userState.loggedIn || userState.status === StatusEnum.LOADING) return
            dispatch(setAuthStatus(StatusEnum.LOADING))
            const controller = ControllerFactory.authControllers().authEmailAndPasswordController()
            try {
                await controller.loginWithEmailAndPassword({email, password})
            } catch (error) {
                dispatch(setAuthStatus(StatusEnum.ERROR))
                dispatch(setAuthMessage("Wrong credentials"))
            }
        },

        async loginWithGoogle() {
            if(userState.loggedIn || userState.status === StatusEnum.LOADING) return
            dispatch(setAuthStatus(StatusEnum.LOADING))
            const controller = ControllerFactory.authControllers().AuthProviderController()
            try {
                await controller.loginWithAuthProvider(AuthProviderEnum.GOOGLE)
            } catch (error) {
                dispatch(setAuthStatus(StatusEnum.ERROR))
                dispatch(setAuthMessage("Wrong credentials"))
            }
        },

        async logout() {
            if(!userState.loggedIn || userState.status === StatusEnum.LOADING) return
            dispatch(setAuthStatus(StatusEnum.LOADING))
            const controller = ControllerFactory.authControllers().authController()
            const isLoggedOut = await controller.logout()
            if(!isLoggedOut){
                dispatch(setAuthStatus(StatusEnum.ERROR))
                dispatch(setAuthMessage("Failed to logout"))
            }
        },
    }}
}