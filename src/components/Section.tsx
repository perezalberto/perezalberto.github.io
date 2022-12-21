import React from "react"
import { TsPropTypes } from "../utils/types/TsPropTypes"

function Sections({
    anchor,
    className,
    title,
    children,
}: TsPropTypes<{
    anchor: string,
    className?: string,
    title: string
}>) {
    return (
        <section className="section">
            <h1 className="section-title" id={anchor}>{title}</h1>
            <div className={className}>
                {children}
            </div>
        </section>
    )
}

export default Sections