import { sum } from "./sum";

// test("add a + b together", () => {
//     const total = sum(1, 10);
//     expect(total).toBe(11);
// });

describe("Tests for Sum function", () => {
    it("should give a valid sum for 2 nums", () => {
        expect(sum(1,2)).toBe(3);
        expect(sum(10,20)).toBe(30);
        expect(sum(11,3)).toBe(14);
    });

    it("should return 0 for 0 arguments", () => {
        expect(sum().toBe(0));
    });
    
})