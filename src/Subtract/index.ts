import { NodeAbstract } from "../NodeAbstract";
import { NodeInterface } from "../NodeAbstract/node.interface";

export class Subtract extends NodeAbstract {
    constructor(left: NodeInterface, right: NodeInterface) {
        super(
            NodeAbstract.TYPE.SUB,
            null,
            left,
            right,
        );
    }

    result(): number {
        return this.left.result() - this.right.result();
    }

    toString(): string {
        return `(${this.left.toString()} ${NodeAbstract.TYPE.SUB} ${this.right.toString()})`;
    }
}