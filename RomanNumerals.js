
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

    //basic conversion
    if(number == 5){
        return 'V';
    }
    


}