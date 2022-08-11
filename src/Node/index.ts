import { NodeInterface } from "../node.interface";

enum Operator {
    SUM = "+",
    SUB = "-",
    MULTIPLY = "x",
    DIVIDE = "÷",
}

export class Node implements NodeInterface {
    readonly operator: Operator | null;
    readonly value: number | null;
    readonly left: NodeInterface | null;
    readonly right: NodeInterface | null;

    static TYPE = {
        SUM: Operator.SUM,
        SUB: Operator.SUB,
        MULTIPLY: Operator.MULTIPLY,
        DIVIDE: Operator.DIVIDE,
    };

    constructor(
        operator: Operator,
        value: number | null,
        left: NodeInterface | null,
        right: NodeInterface | null,
    ) {
        this.operator = operator;
        this.value = value;
        this.left = left;
        this.right = right;
    }

    result(): number {
        if (!this.operator) {
            return this.value;
        }

        const left = this.left.result();
        const right = this.right.result();

        if (left === 0) {
            return 0;
        }

        switch (this.operator) {
        case Operator.SUM:
            return this.left.result() + this.right.result();
        case Operator.SUB:
            return this.left.result() - this.right.result();
        case Operator.MULTIPLY:
            return this.left.result() * this.right.result();
        case Operator.DIVIDE:
            if (right === 0) {
                throw new Error(`Cannot divide ${left} by 0`);
            }
            return left / right;
        }
    }
    
    toString(): string {
        switch (this.operator) {
        case Operator.SUM:
            return `(${this.left.toString()} ${Operator.SUM} ${this.right.toString()})`;
        case Operator.SUB:
            return `(${this.left.toString()} ${Operator.SUB} ${this.right.toString()})`;
        case Operator.MULTIPLY:
            return `(${this.left.toString()} ${Operator.MULTIPLY} ${this.right.toString()})`;
        case Operator.DIVIDE:
            return `(${this.left.toString()} ${Operator.DIVIDE} ${this.right.toString()})`;
        default:
            return this.value.toString();
        }
    }
}