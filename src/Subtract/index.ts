import { Node } from "../Node";
import { NodeInterface } from "../node.interface";

export class Subtract extends Node {
    constructor(left: NodeInterface, right: NodeInterface) {
        super(
            Node.TYPE.SUB,
            null,
            left,
            right,
        );
    }
}