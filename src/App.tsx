import React from "react"

import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom"

import { HashLink as Link } from "react-router-hash-link"
import Button, { ButtonStyle } from "./components/Button"

import GithubIcon from "./components/icons/GithubIcon"
import LinkedInIcon from "./components/icons/LinkedInIcon"
import TwetterIcon from "./components/icons/TwetterIcon"
import Navbar from "./components/Navbar"
import { useAuth } from "./hooks/useAuth"

import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
    const {authState, authActions} = useAuth()
    return (
        <div className="App">
            <HashRouter>
                <Navbar>
                    <ul className="nav-list">
                        <li><Link to="/#">Home</Link></li>
                        <li><Link to="/#about">About</Link></li>
                        <li><Link to="/#skills">Skills</Link></li>
                        <li><Link to="/#projects">Projects</Link></li>
                        <li><Link to="/#contact">Contact</Link></li>
                    </ul>
                    <ul className="social-list">
                        <li><a href="#linkedin"><LinkedInIcon /></a></li>
                        <li><a href="#github"><GithubIcon /></a></li>
                        <li><a href="#twitter"><TwetterIcon /></a></li>
                    </ul>

                    <ul className="nav-list">
                        {authState.loggedIn && <li><Button onClick={authActions.logout} style={ButtonStyle.PRIMARY}>logout</Button></li>}
                    </ul>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </HashRouter>
        </div>
    )
}

export default App
