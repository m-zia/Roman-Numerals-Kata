import { translate } from "../RomanNumerals";

describe("translate", () => {

    test("returns an error if user doesn't enter a number", () => {
        expect(translate({})).toBe("Error: Invalid input. Please enter a number.");
        expect(translate('test-string')).toBe("Error: Invalid input. Please enter a number.");
        expect(translate(true)).toBe("Error: Invalid input. Please enter a number.");
        expect(translate([])).toBe("Error: Invalid input. Please enter a number.");
    });

    test("check if user entered one of the main / primary numerals", () => {
        expect(translate(1)).toBe('I');
        expect(translate(4)).toBe('IV');
        expect(translate(5)).toBe('V');
        expect(translate(9)).toBe('IX');
        expect(translate(10)).toBe('X');
        expect(translate(40)).toBe('XL');
        expect(translate(50)).toBe('L');
        expect(translate(90)).toBe('XC');
        expect(translate(100)).toBe('C');
        expect(translate(400)).toBe('CD');
        expect(translate(500)).toBe('D');
        expect(translate(900)).toBe('CM');
        expect(translate(1000)).toBe('M');
    });


  });