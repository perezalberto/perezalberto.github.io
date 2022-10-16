import React, { createContext, useContext } from "react"
import { StatusEnum } from "../app/common/domain/StatusEnum"
import { ObjectType } from "../utils/types/ObjectType"
import { TsPropTypes } from "../utils/types/TsPropTypes"

const ContainerContext = createContext<{ data: ObjectType[], status?: StatusEnum }>({ data: [], status: StatusEnum.OK })
const ItemContext = createContext<ObjectType>({})

class List {
    static Container({ data, status = StatusEnum.OK, children }: TsPropTypes<{ data: ObjectType[], status?: StatusEnum }>) {
        return (
            <ContainerContext.Provider value={{ data, status }}>
                {children}
            </ContainerContext.Provider>
        )
    }

    static Default({ children }: TsPropTypes) {
        const props = useContext(ContainerContext)
        return (
            <>
                {props.data.length === 0 && props.status === StatusEnum.OK && children} 
            </>
        )
    }

    static Loading({ children }: TsPropTypes) {
        const props = useContext(ContainerContext)
        return (
            <>
                {props.status === StatusEnum.LOADING && children} 
            </>
        )
    }

    static Error({ children }: TsPropTypes) {
        const props = useContext(ContainerContext)
        return (
            <>
                {props.status === StatusEnum.ERROR && children} 
            </>
        )
    }

    static Loop({ children }: TsPropTypes) {
        const props = useContext(ContainerContext)
        return (
            <>
                {props.data.length !== 0 && props.status === StatusEnum.OK && props.data.map(data => {
                    <ItemContext.Provider value={ data }>
                        {children}
                    </ItemContext.Provider>
                })}
            </>
        )
    }

    static Item = ItemContext.Consumer
}

// const a = (
//     <List.Container data={[{value: 1}]}>
//         <>
//             <List.Loop>
//                 <List.Item>
//                     {({value}) => (
//                         <div>{value}</div>
//                     )}
//                 </List.Item>
//             </List.Loop>
//         </>
//     </List.Container>
// )

export default List