function isArmstrongNumber(num: number): void {
    let sum = 0;
    let temp = num;
    const numDigits = num.toString().length;

    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, numDigits);
        temp = Math.floor(temp / 10);
    }

    if (sum === num) {
        console.log(`${num} is an Armstrong number.`);
    } else {
        console.log(`${num} is not an Armstrong number.`)
    
    }
}
console.log(isArmstrongNumber(153));


