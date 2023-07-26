
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

        case 40:
            return 'XL'
            break;

        case 50:
            return 'L'
            break;

        case 90:
            return 'XC'
            break;

        case 100:
            return 'C'
            break;

        case 400:
            return 'CD'
            break;

        case 500:
            return 'D'
            break;
        case 900:
            return 'CM'
            break;

        case 1000:
            return 'M'
            break;

        default:
        //if the input number is greater than or equal to the current value in the numbers array of "primaries", then subtract that value from the input and add that Roman numeral to the result string.
            let result = '';
            const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
            const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

            for (let i = 0; i < numbers.length; i++) {
                while (number >= numbers[i]) {
                    result += numerals[i];
                    number -= numbers[i];
                }
            }

            return result;
    }

}