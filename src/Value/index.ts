import { NodeAbstract } from "../NodeAbstract";

export class Value extends NodeAbstract {
    constructor(value: number) {
        super(null, value, null, null);
    }

    result(): number {
        return this.value;
    }

    toString(): string {
        return this.value.toString();
    }
}