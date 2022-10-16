import { AnyAction, Store } from "@reduxjs/toolkit"

export abstract class ServiceBase {

    protected store: Store<unknown, AnyAction>

    constructor(store: Store<unknown, AnyAction>) {
        this.store = store
    }
    
    abstract start(): void
    abstract stop(): void
}