import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Button, { ButtonStyle, ButtonType } from "../components/Button"
import GoogleIcon from "../components/icons/GoogleIcon"
import XmarkIcon from "../components/icons/XmarkIcon"
import { useAuth } from "../hooks/useAuth"
import { useForm } from "../hooks/useForm"

function Login() {
    const { Form } = useForm<{email: string, password: string}>() // TODO: Cambiar a useForm

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const auth = useAuth()
    const navigateTo = useNavigate()
    
    useEffect(() => {
        if(auth.authState.loggedIn){
            navigateTo("/")
        }
    },[auth.authState.loggedIn])

    return (
        <div className="login-page">
            <div className="login-container">
                <h1 className="login-title">Login</h1>
                <form>
                    { auth.authState.message
                        ? (
                            <p className="login-error">
                                <XmarkIcon/>
                                <span className="ml-4">{auth.authState.message}</span>
                            </p>
                        ) : null }
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <Button onClick={()=>{auth.authActions.loginWithEmailAndPassword(email, password)}} style={ButtonStyle.PRIMARY}>login in</Button>
                    <Button onClick={()=>{auth.authActions.loginWithGoogle()}} style={ButtonStyle.RED} icon={<GoogleIcon />}>Login With Google</Button>
                </form>
            </div>
        </div>
    )
}

export default Login
