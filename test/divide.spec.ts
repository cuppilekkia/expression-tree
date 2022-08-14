import { Divide } from "../src/Divide";
import { NodeAbstract } from "../src/NodeAbstract";
import { Value } from "../src/Value";

describe("Divide Node", () => {
    const left = new Value(6);
    const right = new Value(2);

    it("should construct a NodeAbstract type", () => {
        const sut = new Divide(left, right);

        expect(sut).toBeInstanceOf(NodeAbstract);
    });

    it("should compute the division", () => {
        const sut = new Divide(left, right);

        expect(sut.result()).toBe(3);
    });
    
    it("should prevent division by Zero", () => {
        const sut = new Divide(left, new Value(0));

        expect(()=>{
            sut.result();
        }).toThrow();
    });
    
    it("should divide zero by number", () => {
        const sut = new Divide(new Value(0), right);

        expect(sut.result()).toBe(0);
    });
    
    it("should divide by Infinity", () => {
        const sut = new Divide(new Value(10), new Value(Infinity));

        expect(sut.result()).toBe(0);
    });
    
    it("should divide Infinity by number", () => {
        const sut = new Divide(new Value(Infinity), new Value(2));

        expect(sut.result()).toBe(Infinity);
    });
});