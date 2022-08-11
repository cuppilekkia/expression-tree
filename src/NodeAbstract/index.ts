import { NodeInterface } from "./node.interface";

enum Operator {
    SUM = "+",
    SUB = "-",
    MULTIPLY = "x",
    DIVIDE = "÷",
}

export class NodeAbstract implements NodeInterface {
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
        throw new Error("Implement this function in the parent class");
    }
    
    toString(): string {
        throw new Error("Implement this function in the parent class");
    }
}