import { Node } from "../Node";

export class Value extends Node {
    constructor(value: number) {
        super(null, value, null, null);
    }
}