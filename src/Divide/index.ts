import { NodeAbstract } from "../NodeAbstract";
import { NodeInterface } from "../NodeAbstract/node.interface";

export class Divide extends NodeAbstract {
    constructor(left: NodeInterface, right: NodeInterface) {
        super(
            NodeAbstract.TYPE.DIVIDE,
            null,
            left,
            right,
        );
    }

    result(): number {
        const right = this.right.result();
        const left = this.left.result();

        if (right === 0) {
            throw new Error(`Cannot divide ${left} by 0`);
        }
        return left / right;
    }

    toString(): string {
        return `(${this.left.toString()} ${NodeAbstract.TYPE.DIVIDE} ${this.right.toString()})`;
    }
}