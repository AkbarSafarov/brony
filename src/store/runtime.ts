import { makeAutoObservable } from "mobx";

class Runtime {
    popup = '';
    visibleOnMedia = 'map';

    constructor() {
        makeAutoObservable(this);
    }

    setPopup(value: string) {
        this.popup = value;
    }

    setVisibleOnMedia(value: string) {
        this.visibleOnMedia = value;
    }
}

export const runtime = new Runtime();
