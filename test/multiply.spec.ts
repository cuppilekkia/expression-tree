import { Multiply } from "../src/Multiply";
import { NodeAbstract } from "../src/NodeAbstract";
import { Value } from "../src/Value";

describe("Multiply Node", () => {
    const left = new Value(6);
    const right = new Value(2);

    it("should construct a NodeAbstract type", () => {
        const sut = new Multiply(left, right);

        expect(sut).toBeInstanceOf(NodeAbstract);
    });

    it("should multiply left times right", () => {
        const sut = new Multiply(left, right);

        expect(sut.result()).toBe(12);
    });
    
    it("should multiply zero times number", () => {
        const sut = new Multiply(new Value(0), right);

        expect(sut.result()).toBe(0);
    });
    
    it("should multiply a number times zero", () => {
        const sut = new Multiply(left, new Value(0));

        expect(sut.result()).toBe(0);
    });
    
    it("should multiply times Infinity", () => {
        const sut = new Multiply(new Value(10), new Value(Infinity));

        expect(sut.result()).toBe(Infinity);
    });
    
    it("should multiply Infinity times number", () => {
        const sut = new Multiply(new Value(Infinity), new Value(2));

        expect(sut.result()).toBe(Infinity);
    });
    
    it("should multiply Infinity times negative number", () => {
        const sut = new Multiply(new Value(Infinity), new Value(-2));

        expect(sut.result()).toBe(-Infinity);
    });
});