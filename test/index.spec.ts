import { tree } from "../src/index";

describe("Expression Tree", () => {
    it("should compute the result", () => {
        expect(tree.result()).toBe(2);
    });
});