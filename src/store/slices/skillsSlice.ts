import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StatusEnum } from "../../app/common/domain/StatusEnum"
import { SkillType } from "../../app/skills/domain/SkillType"

export type SkillStateType = {
    list: ({id: string} & SkillType)[],
    status: StatusEnum,
    message?: string,
}

const initialState: SkillStateType = {
    list: [],
    status: StatusEnum.OK,
}

const skillsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setSkills: (state, action: PayloadAction<({id: string} & SkillType)[]>) => {
            state.list = action.payload
        },

        addSkill: (state, action: PayloadAction<{id: string} & SkillType>) => {
            state.list = [...(state.list), action.payload]
        },

        updateSkill: (state, action: PayloadAction<{id: string} & SkillType>) => {
            for (let i = 0; state.list.length > i; i++) {
                if(state.list[i].id === action.payload.id) {
                    state.list[i] = action.payload
                    break
                }
            }
        },

        removeSkill: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(
                skill => skill.id !== action.payload
            )
        },

        setSkillsStatus: (state, action: PayloadAction<StatusEnum>) => {
            state.status = action.payload
        },

        setSkillsMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload
        },
    },
})

export const {
    setSkills,
    addSkill,
    updateSkill,
    removeSkill,
    setSkillsStatus,
    setSkillsMessage,
} = skillsSlice.actions

export default skillsSlice.reducer
