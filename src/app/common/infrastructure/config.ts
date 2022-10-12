import { FirebaseAuthController } from "../../auth/infrastructure/FirebaseAuthController"
import { FirestoreProjectController } from "../../projects/infrastructure/FirestoreProjectController"
import { FirebaseStorageController } from "../../storage/infrastructure/FirebaseStorageController"

export const controllers = {
    CurrentProjectController: FirestoreProjectController,
    CurrentStorageController: FirebaseStorageController,
    CurrentAuthController: FirebaseAuthController,
}
    
