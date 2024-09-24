//Funtion Type
var greet;
greet = function () {
    return "Hello";
};
console.log(greet);
//Function with Parameter
var add;
add = function (a, b) {
    return (add(10, 20));
};
console.log(add(15, 15));
//Function with Return type
var add2;
add2 = function (a, b) {
    return a + b;
};
console.log(add2(15, 47));
//Function with Union Type Params
var add1;
add = function (a, b, c) {
    if (typeof c === 'number') {
        return a + b + c;
    }
    return a + b;
};
console.log(add(15, 47));
//Function with default value
var add3;
add3 = function (a, b, c) {
    if (c === void 0) { c = 10; }
    if (typeof c === 'number') {
        return a + b + c;
    }
    return a + b;
};
console.log(add3(15, 47));
var addition;
add3 = function (a, b, c) {
    if (c === void 0) { c = 10; }
    if (typeof c === 'number') {
        return a + b + c;
    }
    return a + b;
};
console.log(add3(15, 47));
//using object 
var printObject = function (employee) {
    console.log("name is ".concat(employee.name, " and age is ").concat(employee.age));
};
printObject({ name: "test", age: 30, ispermanent: true });
