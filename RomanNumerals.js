
//goal is to convert  normal numbers to Roman Numerals: eg
//1 --> I
//10 --> X
//7 --> VII

export function translate(number) {
    if (number === undefined) throw new Error('number is required');

    //if user doesn't enter a string
    if (isNaN(parseInt(number))) {
        return ("Error: Invalid input. Please enter a number.")
    }

    //check if user entered one of the main / primary numerals
    switch (number) {
        case 1:
            return 'I'
            break;
        case 4:
            return 'IV'
            break;

        case 5:
            return 'V'
            break;
        case 9:
            return 'IX'
            break;

        case 10:
            return 'X'
            break;

        default:
            return 'number needs to be implemented'
    }





}