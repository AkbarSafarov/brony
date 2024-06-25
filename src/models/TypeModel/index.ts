import { action, makeObservable, toJS } from 'mobx';
import { deserialize, getDefaultModelSchema, serialize, update } from 'serializr';

export default class BaseModel {
    constructor() {
        makeObservable(this);
    }

    get plain() {
        return toJS(this);
    }

    @action
    update(obj: any) {
        if (typeof obj !== 'undefined') {
            update(this, obj);
        }
    }

    serialize() {
        return serialize(this);
    }

    static deserialize(obj: any) {
        return deserialize(getDefaultModelSchema(this), obj);
    }

    clone() {
        return (this.constructor as any).deserialize(this.serialize());
    }
}
