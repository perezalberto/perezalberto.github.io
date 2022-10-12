import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StatusEnum } from "../../app/common/domain/StatusEnum"
import { ProjectRemoteType } from "../../app/projects/domain/ProjectRemoteType"

export type ProjectState = {
    list: ({id: string} & ProjectRemoteType)[],
    status: StatusEnum,
    error?: string,
}

const initialState: ProjectState = {
    list: [],
    status: StatusEnum.OK,
}

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setProjects: (state, action: PayloadAction<({id: string} & ProjectRemoteType)[]>) => {
            state.list = action.payload
        },

        addProject: (state, action: PayloadAction<{id: string} & ProjectRemoteType>) => {
            state.list = [...(state.list), action.payload]
        },

        updateProject: (state, action: PayloadAction<{id: string} & ProjectRemoteType>) => {
            for (let i = 0; state.list.length > i; i++) {
                if(state.list[i].id === action.payload.id) {
                    state.list[i] = action.payload
                    break
                }
            }
        },

        removeProject: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter((
                (project) => project.id !== action.payload
            ))
        },

        setProjectsState: (state, action: PayloadAction<StatusEnum>) => {
            state.status = action.payload
        },

        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    },
})

export const {
    setProjects,
    addProject,
    updateProject,
    removeProject,
    setProjectsState,
    setError,
} = projectsSlice.actions

export default projectsSlice.reducer
