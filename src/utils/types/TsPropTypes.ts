type childType = JSX.Element[] | JSX.Element
export type TsPropTypes<T extends void | object = void> = T extends void ? {children: childType} : T & {children: childType}