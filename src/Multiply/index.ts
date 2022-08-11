import { NodeAbstract } from "../NodeAbstract";
import { NodeInterface } from "../NodeAbstract/node.interface";

export class Multiply extends NodeAbstract {
    constructor(left: NodeInterface, right: NodeInterface) {
        super(
            NodeAbstract.TYPE.MULTIPLY,
            null,
            left,
            right,
        );
    }

    result(): number {
        const left = this.left.result();

        if (left === 0) {
            return 0;
        }
        return left * this.right.result();
    }

    toString(): string {
        return `(${this.left.toString()} ${NodeAbstract.TYPE.MULTIPLY} ${this.right.toString()})`;
    }
}