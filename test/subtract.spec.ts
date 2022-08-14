import { NodeAbstract } from "../src/NodeAbstract";
import { Subtract } from "../src/Subtract";
import { Value } from "../src/Value";

describe("Subtract Node", () => {
    const left = new Value(6);
    const right = new Value(2);

    it("should construct a NodeAbstract type", () => {
        const sut = new Subtract(left, right);

        expect(sut).toBeInstanceOf(NodeAbstract);
    });

    it("should subtract right from left", () => {
        const sut = new Subtract(left, right);

        expect(sut.result()).toBe(4);
    });
    
    it("should subtract from a negative number", () => {
        const sut = new Subtract(new Value(-2), right);

        expect(sut.result()).toBe(-4);
    });
    
    it("should subtract Infinity from a number", () => {
        const sut = new Subtract(left, new Value(Infinity));

        expect(sut.result()).toBe(-Infinity);
    });
    
    it("should subtract a number from negative Infinity", () => {
        const sut = new Subtract(new Value(-Infinity), right);

        expect(sut.result()).toBe(-Infinity);
    });
});