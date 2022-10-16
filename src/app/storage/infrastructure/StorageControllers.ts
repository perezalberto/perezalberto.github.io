import { StorageController } from "../application/StorageController"
import { FirebaseStorageController } from "./FirebaseStorageController"

export class StorageControllers {
    private controller: FirebaseStorageController

    constructor() {
        this.controller = new FirebaseStorageController()
    }

    storageController(): StorageController {
        return new StorageController(this.controller)
    }
}