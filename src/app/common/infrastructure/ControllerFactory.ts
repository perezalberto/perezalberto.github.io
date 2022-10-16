import { AuthControllers } from "../../auth/infrastructure/AuthControllers"
import { ProjectControllers } from "../../projects/infrastructure/ProjectControllers"
import { SkillControllers } from "../../skills/infrastructure/SkillControllers"
import { StorageControllers } from "../../storage/infrastructure/StorageControllers"

export class ControllerFactory {

    private static _projectController: ProjectControllers
    private static _skillController: SkillControllers
    private static _storageController: StorageControllers
    private static _authControllers: AuthControllers

    static projectControllers(): ProjectControllers {
        if(!ControllerFactory._projectController) {
            ControllerFactory._projectController = new ProjectControllers()
        }
        return ControllerFactory._projectController
    }

    static skillControllers(): SkillControllers {
        if(!ControllerFactory._skillController) {
            ControllerFactory._skillController = new SkillControllers()
        }
        return ControllerFactory._skillController
    }

    static storageControllers(): StorageControllers {
        if(!ControllerFactory._storageController) {
            ControllerFactory._storageController = new StorageControllers()
        }
        return ControllerFactory._storageController
    }

    static authControllers(): AuthControllers {
        if(!ControllerFactory._authControllers) {
            ControllerFactory._authControllers = new AuthControllers()
        }
        return ControllerFactory._authControllers
    }
}