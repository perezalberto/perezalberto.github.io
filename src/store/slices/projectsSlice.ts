import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StatusEnum } from "../../app/common/domain/StatusEnum"
import { ProjectRemoteType } from "../../app/projects/domain/ProjectRemoteType"

export type ProjectStateType = {
    list: ({id: string} & ProjectRemoteType)[],
    status: StatusEnum,
    message?: string,
}

const initialState: ProjectStateType = {
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
            state.list = state.list.filter(
                project => project.id !== action.payload
            )
        },

        setProjectsStatus: (state, action: PayloadAction<StatusEnum>) => {
            state.status = action.payload
        },

        setProjectsMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload
        },
    },
})

export const {
    setProjects,
    addProject,
    updateProject,
    removeProject,
    setProjectsStatus,
    setProjectsMessage,
} = projectsSlice.actions

export default projectsSlice.reducer
