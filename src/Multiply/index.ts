import { Node } from "../Node";
import { NodeInterface } from "../node.interface";

export class Multiply extends Node {
    constructor(left: NodeInterface, right: NodeInterface) {
        super(
            Node.TYPE.MULTIPLY,
            null,
            left,
            right,
        );
    }
}