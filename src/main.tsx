import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./scss/style.scss"

// redux
import { Provider } from "react-redux"
import store from "./store/store"

// Service manager
import { Services } from "./services/Services"

// Services
import { ProjectService } from "./services/ProjectService"
import { SkillService } from "./services/SkillService"
import { AuthService } from "./services/AuthService"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <Services store={store} services={[ProjectService, SkillService, AuthService]} />
        <App />
    </Provider>
)
