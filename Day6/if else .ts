//example 1

const max = 100;
let counter = 0;

if (counter < max) {
    counter++;
}

console.log(counter); 

//example 2

const max1 = 100;
let counter1 = 100;

if (counter1 < max1) {
    counter1++;
}

console.log(counter1); 

//example 3

function checkNumber(num: number): string {
    if (num > 0) {
        return "The number is positive.";
    } else if (num < 0) {
        return "The number is negative.";
    } else {
        return "The number is zero.";
    }
}
console.log(checkNumber(10));  
console.log(checkNumber(-5));  
console.log(checkNumber(0));    
