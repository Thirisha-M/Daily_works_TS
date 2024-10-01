/*Write a TypeScript program that declares a variable 'result' that can hold either a 'string' or a 'number'.
 Now write a function that takes an argument of type 'string | number | boolean' and logs its type.*/
var result;
function logType(value) {
    console.log("The type of the value is: ".concat(typeof value));
}
result = "Hello, TypeScript!";
logType(result);
result = 42;
logType(result);
logType(true);
