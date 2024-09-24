var result;
result = 1;
console.log(result);
result = 'Hello';
console.log(result);
result = [1, 2, 3];
var total = result.reduce(function (a, b) { return a + b; }, 1);
console.log(total);
/*The Array.reduce() method in TypeScript is used to reduce an array
to a single value by applying a callback functio to each element of the array.

array.reduce(callback[,initialvalue])
*/
//Examples
var randomValue;
randomValue = 10;
console.log("Number:", randomValue);
randomValue = "Hello, world!";
console.log("String:", randomValue);
randomValue = true;
console.log("Boolean:", randomValue);
// Use 'any' in an array
var mixedArray = [1, "Two", true, { key: "value" }];
mixedArray.forEach(function (item, index) {
    console.log("Item ".concat(index, ":"), item);
});
// Use 'any' in a function
function logValue(value) {
    console.log("Logging value:", value);
}
logValue(123);
logValue("This is a test.");
logValue([1, 2, 3]);
