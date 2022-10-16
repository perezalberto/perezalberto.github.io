import { configureStore } from "@reduxjs/toolkit"

// Reducers
import authReducer, {AuthStateType} from "./slices/authSlice"
import projectsReducer, {ProjectStateType} from "./slices/projectsSlice"
import skillsReducer, {SkillStateType} from "./slices/skillsSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        projects: projectsReducer,
        skills: skillsReducer,
    },
})

export type RootStateType = {
    auth: AuthStateType,
    projects: ProjectStateType,
    skills: SkillStateType,
}

export default store