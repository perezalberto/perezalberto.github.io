import React from "react"

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"

import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
    return (
        <div className="App">
            <Router>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App
