import assert from "node:assert";
import { Divide } from "./Divide";
import { Multiply } from "./Multiply";
import { Node } from "./Node";
import { Subtract } from "./Subtract";
import { Sum } from "./Sum";
import { Value } from "./Value";

const tree = new Divide(
    new Sum(
        new Value(7),
        new Multiply(
            new Subtract(
                new Value(3), 
                new Value(2)
            ),
            new Value(5)
        )
    ),
    new Value(6)
);

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree.result());

export { Node, tree };