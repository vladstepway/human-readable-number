module.exports = function toReadable(number) {
    let readableNumber = "";
    const basicNumbers = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty ",
        30: "thirty ",
        40: "forty ",
        50: "fifty ",
        60: "sixty ",
        70: "seventy ",
        80: "eighty ",
        90: "ninety ",
    };
    const hundreds = number % 1000;
    const decades = number % 100;
    const units = number % 10;

    const roundedDecades = Math.floor(decades / 10);
    const roundedHundreds = Math.floor(hundreds / 100);
    if (number === 0) {
        readableNumber += "zero";
    }
    if (hundreds > 99 && hundreds < 1000) {
        readableNumber += basicNumbers[roundedHundreds] + " hundred ";
    }
    if (decades < 100 && decades > 19) {
        readableNumber += basicNumbers[roundedDecades + "0"];
        readableNumber += basicNumbers[units];
    }
    if (decades < 20 && decades > 9) {
        readableNumber += basicNumbers[decades];
    }
    if (roundedDecades === 0) {
        readableNumber += basicNumbers[units];
    }

    return readableNumber.trim();
};
