import { observable, action, makeObservable } from 'mobx';
import TypeModel from '../TypeModel';

export default class Runtime extends TypeModel {
    constructor() {
        super();
        makeObservable(this);
    }

    @observable popup = '';

    @action
    setPopup(value: string = '') {
        this.popup = value;
    }

}
