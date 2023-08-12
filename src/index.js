module.exports = function toReadable(number) {
    const numbers1to19 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const numbers20to90 = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let nmbrToString = number.toString();

    switch (nmbrToString.length) {
        case 1:
            nmbrToString = "00" + nmbrToString;
            break;
        case 2:
            nmbrToString = "0" + nmbrToString;
            break;
        case 3:
            nmbrToString;
            break;
    }

    let result = "";
    Number(nmbrToString.slice(-2)) >= 0 && Number(nmbrToString.slice(-2)) <= 19
        ? (result = `${numbers1to19[Number(nmbrToString[0])]} hundred ${
              numbers1to19[Number(nmbrToString.slice(-2))]
          }`)
        : (result = `${numbers1to19[Number(nmbrToString[0])]} hundred ${
              numbers20to90[Number(nmbrToString[1]) - 2]
          } ${numbers1to19[Number(nmbrToString[2])]}`);
    return result.replace("zero hundred ", "").replace(" zero", "");
};
