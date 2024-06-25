import { makeAutoObservable } from "mobx";

class Runtime {
    popup = '';

    constructor() {
        makeAutoObservable(this);
    }

    setPopup(value: string) {
        this.popup = value;
    }
}

export const runtime = new Runtime();
