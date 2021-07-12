export function maskTotal(money) {

    let moneyConverted = String(money);

    const numberOfPoint = (moneyConverted.length%3) === 0 ? Math.floor(moneyConverted.length/3)-1 : Math.floor(moneyConverted.length/3);

    let remainingDigitNumber = moneyConverted.length;
    let digits = [];

    for (let i = 0; i < numberOfPoint; i++) {

        digits.push(moneyConverted.substring(remainingDigitNumber-3, remainingDigitNumber));
        remainingDigitNumber -= 3;
    }

    let moneyWithMask = moneyConverted.substring(0, remainingDigitNumber);

    for (let i = 1; i <= digits.length; i++)
        moneyWithMask += `.${digits[digits.length-i]}`;
    
    
    return moneyWithMask
}