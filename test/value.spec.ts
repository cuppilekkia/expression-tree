import { NodeAbstract } from "../src/NodeAbstract";
import { Value } from "../src/Value";

describe("Value Node", () => {
    it("should construct a NodeAbstract type", () => {
        const sut = new Value(3);

        expect(sut).toBeInstanceOf(NodeAbstract);
    });
    
    it("should implement a NodeInterface", () => {
        const sut = new Value(5);

        expect(sut.result()).toBe(5);
        expect(sut.toString()).toBe("5");
    });
});