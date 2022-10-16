import { useEffect } from "react"
import { ServiceBase } from "./ServiceBase"
import { Store, AnyAction} from "redux"
import { ServiceGroup } from "./ServiceGroup"

export function Services({store, services}: {store: Store<unknown, AnyAction>, services: (new(store: Store<unknown, AnyAction>) => ServiceBase)[]}) {
    const group = new ServiceGroup(store, services)
    useEffect(()=>{
        group.start()
        return () => group.stop()
    },[])
    return (
        <></>
    )
}