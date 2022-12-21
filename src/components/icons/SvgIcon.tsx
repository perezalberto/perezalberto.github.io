import React from "react"
import { TsPropTypes } from "../../utils/types/TsPropTypes"

function SvgIcon({children, viewBox}: TsPropTypes<{viewBox: string}>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} className="icon" style={{display: "inline", fill: "currentcolor", height: "1em", top: "0.125em", position: "relative"}}>
            {children}
        </svg>
    )
}

export default SvgIcon