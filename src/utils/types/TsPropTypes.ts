import { ReactNode } from "react"

export type TsPropTypes<T extends void | object = void> = T extends void ? {children?: ReactNode} : T & {children?: ReactNode}