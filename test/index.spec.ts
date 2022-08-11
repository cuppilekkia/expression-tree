import { tree } from "../src/index";

describe("Expression Tree", () => {
    it("should compute the result", () => {
        expect(tree.result()).toBe(2);
    });
    
    it("should compute the string", () => {
        expect(tree.toString()).toBe("((7 + ((3 - 2) x 5)) ÷ 6)");
    });
});