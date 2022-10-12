import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StatusEnum } from "../../app/common/domain/StatusEnum"
import { SkillType } from "../../app/skills/domain/SkillType"

export type SkillState = {
    list: ({id: string} & SkillType)[],
    status: StatusEnum,
    error?: string,
}

const initialState: SkillState = {
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
            state.list = state.list.filter(skill => {
                skill.id !== action.payload
            })
        },

        setSkillsState: (state, action: PayloadAction<StatusEnum>) => {
            state.status = action.payload
        },

        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    },
})

export const {
    setSkills,
    addSkill,
    updateSkill,
    removeSkill,
    setSkillsState,
    setError,
} = skillsSlice.actions

export default skillsSlice.reducer
