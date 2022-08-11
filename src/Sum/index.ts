import { Node } from "../Node";
import { NodeInterface } from "../node.interface";

export class Sum extends Node {
    constructor(left: NodeInterface, right: NodeInterface) {
        super(
            Node.TYPE.SUM,
            null,
            left,
            right,
        );
    }
}