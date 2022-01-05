module.exports = function toReadable(number) {
    let one = [
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
    let ten = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let groups = [];
    let hundred = parseInt(number / 100),
        remainder = number % 100;
    if (hundred) {
        groups.push(`${one[hundred]} hundred`);
    }
    if (remainder >= 20) {
        let dozen = parseInt(remainder / 10);
        if (dozen) {
            groups.push(ten[dozen - 2]);
        }
        remainder %= 10;
    }
    if (remainder || groups.length == 0) {
        groups.push(one[remainder]);
    }
    return groups.join(" ");
};
