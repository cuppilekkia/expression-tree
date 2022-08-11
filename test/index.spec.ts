import { Divide } from "../src/Divide";
import { tree } from "../src/index";
import { Multiply } from "../src/Multiply";
import { Sum } from "../src/Sum";
import { Value } from "../src/Value";

describe("Expression Tree", () => {
    it("should compute the result", () => {
        expect(tree.result()).toBe(2);
    });
    
    it("should compute the string", () => {
        expect(tree.toString()).toBe("((7 + ((3 - 2) x 5)) ÷ 6)");
    });
    
    it("should if the tree has a divide by Zero", () => {
        const sut = new Sum(
            new Multiply(
                new Value(4),
                new Divide(
                    new Value(0),
                    new Value(0)
                )
            ),
            new Value(5)
        );

        expect(()=>{
            sut.result();
        }).toThrow();

        expect(sut.toString()).toBe("((4 x (0 ÷ 0)) + 5)");
    });
});