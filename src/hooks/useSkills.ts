import { useSelector, useDispatch } from "react-redux"
import { StatusEnum } from "../app/common/domain/StatusEnum"
import { ControllerFactory } from "../app/common/infrastructure/ControllerFactory"
import { SkillType } from "../app/skills/domain/SkillType"
import { SkillStateType, setSkillsMessage, setSkillsStatus,  } from "../store/slices/skillsSlice"
import { RootStateType } from "../store/store"

export function useSkills() {
    const skillsState = useSelector<RootStateType, SkillStateType>(state => state.skills)
    const dispatch = useDispatch()

    return {skillsState: skillsState, skillsActions:{
        async create(data: SkillType){
            dispatch(setSkillsStatus(StatusEnum.LOADING))
            const controller = ControllerFactory.skillControllers().skillController()
            const skillId = await controller.create(data)
            if(skillId === undefined) {
                dispatch(setSkillsStatus(StatusEnum.ERROR))
                dispatch(setSkillsMessage("Failed to create skill"))
            }
        },
        async update(id: string, data: Partial<SkillType>){
            dispatch(setSkillsStatus(StatusEnum.LOADING))
            const controller = ControllerFactory.skillControllers().skillController()
            const isUpdated = await controller.updateOne(id,data)
            if(!isUpdated) {
                dispatch(setSkillsStatus(StatusEnum.ERROR))
                dispatch(setSkillsMessage("Failed to update skill"))
            }
        },
        async remove(id: string){
            dispatch(setSkillsStatus(StatusEnum.LOADING))
            const controller = ControllerFactory.skillControllers().skillController()
            const isRemoved = await controller.removeOne(id)
            if(!isRemoved) {
                dispatch(setSkillsStatus(StatusEnum.ERROR))
                dispatch(setSkillsMessage("Failed to remove skill"))
            }
        },
    }}
}