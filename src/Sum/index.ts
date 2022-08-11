import { NodeAbstract } from "../NodeAbstract";
import { NodeInterface } from "../NodeAbstract/node.interface";

export class Sum extends NodeAbstract {
    constructor(left: NodeInterface, right: NodeInterface) {
        super(
            NodeAbstract.TYPE.SUM,
            null,
            left,
            right,
        );
    }

    result(): number {
        return this.left.result() + this.right.result();
    }

    toString(): string {
        return `(${this.left.toString()} ${NodeAbstract.TYPE.SUM} ${this.right.toString()})`;
    }
}