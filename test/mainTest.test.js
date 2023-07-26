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

    test("check if function works for some non-primary numerals", () => {
        expect(translate(2)).toBe('II');
        expect(translate(3)).toBe('III');
        expect(translate(6)).toBe('VI');
        expect(translate(7)).toBe('VII');
        expect(translate(8)).toBe('VIII');
        expect(translate(11)).toBe('XI');
        expect(translate(41)).toBe('XLI');
        expect(translate(52)).toBe('LII');
        expect(translate(93)).toBe('XCIII');
        expect(translate(106)).toBe('CVI');
        expect(translate(402)).toBe('CDII');
        expect(translate(505)).toBe('DV');
        expect(translate(912)).toBe('CMXII');
        expect(translate(1008)).toBe('MVIII');

    });


  });