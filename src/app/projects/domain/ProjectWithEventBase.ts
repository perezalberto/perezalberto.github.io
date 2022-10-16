import { ProjectBase } from "./ProjectBase"
import { ProjectRemoteType } from "./ProjectRemoteType"

export interface ProjectWithEventBase extends ProjectBase{
    onProjectChange(observer: (changes: {type: "added" | "modified" | "removed", data: ({id: string} & ProjectRemoteType)}[]) => void): { unsubscribe: () => void } 
}