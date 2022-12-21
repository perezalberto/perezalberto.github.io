import React, { useEffect, useState } from "react"
import { TsPropTypes } from "../utils/types/TsPropTypes"

function Navbar({ children }: TsPropTypes) {
    const [isMenuActive, setMenuState] = useState(false)

    const toggleMenuState = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setMenuState(!isMenuActive)
    }

    useEffect(() => {
        if (isMenuActive) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isMenuActive])

    useEffect(() => {
        const setMenuStateListener = () => {
            if (isMenuActive) {
                setMenuState(false)
            }
        }
        window.addEventListener("resize", setMenuStateListener)
        return () => {
            window.removeEventListener("resize", setMenuStateListener)
        }
    })

    return (
        <>
            <div className="display-fix"></div>
            <nav className="navbar">
                <div className={isMenuActive ? "navbar-menu-button active" : "navbar-menu-button"}>
                    <a href="#" onClick={toggleMenuState}>
                        <svg className={isMenuActive ? "menu-icon active" : "menu-icon"} viewBox="0 0 100 100" width="80">
                            <path
                                className="line top"
                                d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
                            />
                            <path
                                className="line middle"
                                d="m 70,50 h -40"
                            />
                            <path
                                className="line bottom"
                                d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
                            />
                        </svg>
                    </a>
                </div>
                <div className="navbar-container" onClick={() => setMenuState(false)} role="presentation">
                    <div className="navbar-brand">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.56 8.06">
                                <g id="a">
                                    <polygon points="7.03 8.06 5.85 8.06 3.51 1.64 1.17 8.06 0 8.06 2.94 0 4.08 0 7.03 8.06" />
                                </g>
                                <g id="p">
                                    <path d="M7.67,0h-2.65l.34,.9h2.31c1.25,0,1.77,.58,1.77,1.55s-.52,1.52-1.77,1.52h-1.15l.34,.9h.81c2.07,0,2.89-1.15,2.89-2.42,0-1.37-.92-2.45-2.89-2.45Z" />
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div className="navbar-links">
                        {children}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
