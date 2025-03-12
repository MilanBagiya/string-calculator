import { Calculator } from "../src/calculator";

describe('String Calculator', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    // Test for empty string returning 0
    test('should return 0 for an empty string', () => {
        expect(calculator.add("")).toBe(0);
    });

    // Test for Handle Single Number
    test('should return the number for a single number string', () => {
        expect(calculator.add("1")).toBe(1);
    });

    // Test for Handle Comma seprated Two Numbers
    test('should return the sum for two numbers', () => {
        expect(calculator.add("1,2")).toBe(3);
    });

    // Test for handle Multiple number Sum
    test('should handle multiple numbers', () => {
        expect(calculator.add("1,2,3,4")).toBe(10);
    });

    // Test for handle new line delimiter
    test('should handle new lines as delimiters', () => {
        expect(calculator.add("1\n2,3")).toBe(6);
    });
});