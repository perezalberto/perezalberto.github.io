import { useSelector, useDispatch } from "react-redux"
import { StatusEnum } from "../app/common/domain/StatusEnum"
import { ControllerFactory } from "../app/common/infrastructure/ControllerFactory"
import { ProjectType } from "../app/projects/domain/ProjectType"
import { ProjectStateType, setProjectsMessage, setProjectsStatus,  } from "../store/slices/projectsSlice"
import { RootStateType } from "../store/store"

export function useProjects() {
    const projectsState = useSelector<RootStateType, ProjectStateType>(state => state.projects)
    const dispatch = useDispatch()

    return {projectsState: projectsState, projectsActions:{
        async create(data: ProjectType){
            dispatch(setProjectsStatus(StatusEnum.LOADING))
            const controller = ControllerFactory.projectControllers().projectController()
            const projectId = await controller.create(data)
            if(projectId === undefined) {
                dispatch(setProjectsStatus(StatusEnum.ERROR))
                dispatch(setProjectsMessage("Failed to create project"))
            }
        },
        async update(id: string, data: Partial<ProjectType>){
            dispatch(setProjectsStatus(StatusEnum.LOADING))
            const controller = ControllerFactory.projectControllers().projectController()
            const isUpdated = await controller.updateOne(id,data)
            if(!isUpdated) {
                dispatch(setProjectsStatus(StatusEnum.ERROR))
                dispatch(setProjectsMessage("Failed to update project"))
            }
        },
        async remove(id: string){
            dispatch(setProjectsStatus(StatusEnum.LOADING))
            const controller = ControllerFactory.projectControllers().projectController()
            const isRemoved = await controller.removeOne(id)
            if(!isRemoved) {
                dispatch(setProjectsStatus(StatusEnum.ERROR))
                dispatch(setProjectsMessage("Failed to remove project"))
            }
        },
    }}
}