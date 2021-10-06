import { expect, it } from "@jest/globals"
import { fib } from "./fib.js"

describe("Test cases and Spec from Fibonacci funtion"), () => {
    
    it("should only take number params"), () => {
        const paramTypeError = new Error("Paramater must be a number")
        expect(() => fib("str")).toThrowError(paramTypeError);
        expect(() => fib(true)).toThrowError(paramTypeError);
        expect(() => fib({})).toThrowError(paramTypeError);
        expect(() => fib(NaN)).toThrowError(paramTypeError);
    };

    it("should throw an error for no params"), () => {
        const noParamError = new Error("You must enter a paramater");
        expect(() => fib()).toThrowError(noParamError);
    };

    it("should not be a float"), () => {
        const paramIsFloat = new Error("You must enter a paramater");
        expect(() => fib(2.8)).toThrowError(paramIsFloat);
        expect(() => fib(8.65)).toThrowError(paramIsFloat);
        expect(() => fib(87.8)).toThrowError(paramIsFloat);
    }

    it("should return the correct sequence of positive numbers"), () => {
        expect(fib(0)).toBe(0);
        expect(fib(5)).toBe(5);
        expect(fib(13)).toBe(233);
    };
    //negative test
    it("should return the correct sequence of negative numbers"), () => {
        expect(fib(-5)).toBe(-5);
        expect(fib(-13)).toBe(-233);
        expect(fib(-11)).toBe(-89);
    };

    it("should not allow n to be larger than 100 due to number size"), () => {
        const numToLarge = new Error("Please enter a number below 100 and above -100");
        expect(() => fib(101)).toThrowError(numToLarge);
        expect(() => fib(700)).toThrowError(numToLarge);
        expect(() => fib(1200)).toThrowError(numToLarge);
    };
    //negative test
    it("should not allow n to be less than -100 due to number size"), () => {
        const numToLarge = new Error("Please enter a number below 100 and above -100");
        expect(() => fib(-101)).toThrowError(numToLarge);
        expect(() => fib(-700)).toThrowError(numToLarge);
        expect(() => fib(-1200)).toThrowError(numToLarge);
    };
}