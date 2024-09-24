//function
var multiply = function (number) {
    return 10 * number;
};
console.log(multiply(50));
//Implicit
var sample = [1, 2, 3];
var sample1 = ["a", "b", "c"];
var sample2 = [true, false];
console.log(sample, sample1, sample2);
//Explicit 
var sample3 = [1, 2, 3, 4];
var sample4 = ["a", "b", "c"];
var sample5 = [true, false];
console.log(sample3, sample4, sample5);
//Declare and Assign later
var sample6;
sample6 = [];
sample6.push(5);
var sample7;
sample7 = [];
sample7.push("Sasvika");
console.log(sample6, sample7);
//read only
var sample8 = [1, 2, 3,];
console.log(sample8);
