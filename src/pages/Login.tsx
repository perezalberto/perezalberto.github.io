import React, { useState } from "react"
import { useAuth } from "../hooks/useAuth"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {actions} = useAuth()
    return (
        <div>
            <form>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={(e)=>{e.preventDefault();actions.loginWithEmailAndPassword(email, password)}}>login</button>
                <button onClick={(e)=>{e.preventDefault();actions.logout()}}>logout</button>
            </form>
        </div>
    )
}

export default Login