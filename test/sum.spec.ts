import { NodeAbstract } from "../src/NodeAbstract";
import { Sum } from "../src/Sum";
import { Value } from "../src/Value";

describe("Sum Node", () => {
    const left = new Value(6);
    const right = new Value(2);

    it("should construct a NodeAbstract type", () => {
        const sut = new Sum(left, right);

        expect(sut).toBeInstanceOf(NodeAbstract);
    });

    it("should sum left and right", () => {
        const sut = new Sum(left, right);

        expect(sut.result()).toBe(8);
    });
    
    it("should sum a negative number", () => {
        const sut = new Sum(new Value(-2), right);

        expect(sut.result()).toBe(0);
    });
    
    it("should sum to Infinity", () => {
        const sut = new Sum(left, new Value(Infinity));

        expect(sut.result()).toBe(Infinity);
    });
    
    it("should sum to negative Infinity", () => {
        const sut = new Sum(new Value(-Infinity), right);

        expect(sut.result()).toBe(-Infinity);
    });
});