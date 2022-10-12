import { configureStore } from "@reduxjs/toolkit"

// Reducers
import authReducer, { AuthState } from "./slices/authSlice"
import projectsReducer, { ProjectState } from "./slices/projectsSlice"
import skillsReducer, { SkillState } from "./slices/skillsSlice"

type RootStateType = {
    auth: AuthState,
    projects: ProjectState,
    skills: SkillState,
}

function saveState(state: RootStateType) {
    try {
        const serializedData = JSON.stringify(state)
        localStorage.setItem("state", serializedData)
    } catch (error) {
        throw new Error("localStorage error")
    }
}

function loadState(): RootStateType | undefined {
    try {
        const serializedData = localStorage.getItem("state")
        if (serializedData === null) {
            return undefined
        }
        return JSON.parse(serializedData)
    } catch (error) {
        return undefined
    }
}

const store = configureStore({
    preloadedState: loadState(),
    reducer: {
        auth: authReducer,
        projects: projectsReducer,
        skills: skillsReducer,
    },
})

store.subscribe(() => {
    saveState(store.getState())
})

export default store