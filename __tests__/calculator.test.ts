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
});