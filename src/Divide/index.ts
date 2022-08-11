import { Node } from "../Node";
import { NodeInterface } from "../node.interface";

export class Divide extends Node {
    constructor(left: NodeInterface, right: NodeInterface) {
        super(
            Node.TYPE.DIVIDE,
            null,
            left,
            right,
        );
    }
}