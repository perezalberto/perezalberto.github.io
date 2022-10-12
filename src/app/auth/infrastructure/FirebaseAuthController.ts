import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth } from "../../../firebase/firebase"
import { AuthEmailAndPasswordBase } from "../domain/AuthEmailAndPasswordBase"
import { AuthEventBase } from "../domain/AuthEventBase"
import { AuthProviderBase } from "../domain/AuthProviderBase"
import { AuthProviderEnum } from "../domain/AuthProviderEnum"
import { UserDataType } from "../domain/UserDataType"

export class FirebaseAuthController implements AuthEmailAndPasswordBase, AuthEventBase, AuthProviderBase {
    public async loginWithEmailAndPassword(credentials: {
        email: string
        password: string
    }): Promise<UserDataType> {
        const userDataRaw = (
            await signInWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password
            )
        ).user
        return {
            email: userDataRaw.email || "",
            name: userDataRaw.displayName || "",
            photoUrl: userDataRaw.photoURL || "",
            uid: userDataRaw.uid || "",
        }
    }
    public async loginWithAuthProvider(provider: AuthProviderEnum): Promise<UserDataType> {
        const auth = getAuth()
        let userData: UserDataType = {}

        if (provider === AuthProviderEnum.GOOGLE) {
            const providerObj = new GoogleAuthProvider()
            const userDataRaw = (await signInWithPopup(auth, providerObj)).user
            userData = {
                email: userDataRaw.email || "",
                name: userDataRaw.displayName || "",
                photoUrl: userDataRaw.photoURL || "",
                uid: userDataRaw.uid || "",
            }
        }
        return userData
    }
    public onAuthStateChange(observer: (user?: UserDataType | undefined) => void): {
        unsubscribe: () => void
    } {
        const _unsubscribe = onAuthStateChanged(auth, (usr) =>
            observer({
                email: usr?.email,
                name: usr?.displayName,
                photoUrl: usr?.photoURL,
                uid: usr?.uid,
            } as UserDataType)
        )
        return { unsubscribe: () => _unsubscribe() }
    }
    public logout(): Promise<boolean> {
        throw new Error("Method not implemented.")
    }
}