import React, { useRef } from "react"

import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

function RequireAuth({ children }: {children: JSX.Element}): JSX.Element {
    const { authState } = useAuth()
    const result = useRef<JSX.Element>(children)

    if (!authState.loggedIn) {
        result.current = <Navigate to="/login" />
    }

    return result.current
}

export default RequireAuth