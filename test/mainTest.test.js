import { translate } from "../RomanNumerals";

describe("translate", () => {

    test("returns an error if user doesn't enter a number", () => {
        expect(translate({})).toBe("Error: Invalid input. Please enter a number.");
        expect(translate('test-string')).toBe("Error: Invalid input. Please enter a number.");
        expect(translate(true)).toBe("Error: Invalid input. Please enter a number.");
        expect(translate([])).toBe("Error: Invalid input. Please enter a number.");
    });

    test("returns the number", () => {
        expect(translate(5)).toBe('V');



    });


  });