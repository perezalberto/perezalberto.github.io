import React, { useState } from "react"
import { TsPropTypes } from "../utils/types/TsPropTypes"
import Button, { ButtonStyle } from "./Button"

function WithActions<T extends TsPropTypes = TsPropTypes>(WrappedComponent: React.ComponentType<T>) {
    const displayName = WrappedComponent.displayName || WrappedComponent.name || "Component"
    function ComponentWithActions({actions, data}: TsPropTypes<{
        actions: {
            text?: string,
            icon?: JSX.Element,
            style?: ButtonStyle
            onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
        }[],
        data: T
    }>) {
        const [mouseIsOver, setMouseOver] = useState(false)
        const mouseOver = () => {
            setMouseOver(true)
        }

        const mouseOut = () => {
            setMouseOver(false)
        }

        return (
            <div onMouseOver={mouseOver} onMouseOut={mouseOut} style={{position:"relative"}}>
                <WrappedComponent {...data} />
                <div className={`tooltip${mouseIsOver ? " tooltip-active" : ""}`}>
                    {
                        actions.map(action => (
                            <Button onClick={action.onClick} key={Math.random() * 1000} icon={action.icon} style={action.style}>{action.text}</Button>
                        ))
                    }
                </div>
            </div>
        )
    }
    
    ComponentWithActions.displayName = `withActions(${displayName})`
    return ComponentWithActions
}

export default WithActions