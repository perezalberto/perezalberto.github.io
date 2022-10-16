import { useSelector, useDispatch } from "react-redux"
import { AuthProviderEnum } from "../app/auth/domain/AuthProviderEnum"
import { StatusEnum } from "../app/common/domain/StatusEnum"
import { ControllerFactory } from "../app/common/infrastructure/ControllerFactory"
import { AuthStateType, setAuthStatus } from "../store/slices/authSlice"
import { RootStateType } from "../store/store"

export function useAuth() {
    const userState = useSelector<RootStateType, AuthStateType>(state => state.auth)
    const dispatch = useDispatch()

    return {state: userState, actions:{
        async loginWithEmailAndPassword(email: string, password: string) {
            if(userState.loggedIn) return
            dispatch(setAuthStatus(StatusEnum.LOADING))
            const controller = ControllerFactory.authControllers().authEmailAndPasswordController()
            await controller.loginWithEmailAndPassword({email, password})
        },

        async loginWithGoogle() {
            if(userState.loggedIn) return
            dispatch(setAuthStatus(StatusEnum.LOADING))
            const controller = ControllerFactory.authControllers().AuthProviderController()
            await controller.loginWithAuthProvider(AuthProviderEnum.GOOGLE)
        },

        async logout() {
            if(!userState.loggedIn) return
            dispatch(setAuthStatus(StatusEnum.LOADING))
            const controller = ControllerFactory.authControllers().authController()
            if(await controller.logout()){
                dispatch(setAuthStatus(StatusEnum.OK))
            }else{
                dispatch(setAuthStatus(StatusEnum.ERROR))
            }
        },
    }}
}