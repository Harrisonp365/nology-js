import { expect, it } from "@jest/globals";
import { describe } from "yargs";
import { rectArea } from "./rect.js";

describe("rect area test cases and spec", () => {
    
    it("should give the correct area for 2 numbers", () => {
        expect(rectArea(1, 2)).toBe(2);
        expect(rectArea(10, 30)).toBe(300);
        expect(rectArea(1.5, 100)).toBe(150);
    });

    it("should throw and error if there are no arguments", () => {
        const noArgsError = new Error("No args found");
        expect(() => rectArea()).toThrowError(noArgsError);
    });

    it("should return a square area if one argument is passed", () => {
        expect(rectArea(10)).toBe(10 ** 2);
        expect(rectArea(30)).toBe(13 ** 2);
        expect(rectArea(64)).toBe(64 ** 2);
    });

    it("should throw and error when an argument is negative", () => {
        const negError = new Error("Args can't be negative");
        expect(() => rectArea(-1, 2)).toThrowError(negError);
        expect(() => rectArea(1, -2)).toThrowError(negError);
        expect(() => rectArea(-1, -2)).toThrowError(negError);

    });

    it("should throw an error when wrong types are passed", () => {
        const wrongType = new Error("Args must be numbers");
        expect(() => rectArea({}, 2)).toThrowError(wrongType);
        expect(() => rectArea(2, "5")).toThrowError(wrongType);
        expect(() => rectArea(true, 2)).toThrowError(wrongType);
        expect(() => rectArea("5", "abc")).toThrowError(wrongType);
    });
})