//basic type
var empId;
empId = 42;
empId = '21ucso42';
empId = true;
//example
var Add_or_Concate = function (a, b) {
    if (typeof a === 'string' && typeof b === "string") {
        return "".concat(a).concat(b);
    }
    else if (typeof a === 'number' && typeof b === "number") {
        return a + b;
    }
    else {
        return 0;
    }
};
console.log("String Concatenation=".concat(Add_or_Concate('abc', 'pqr')));
console.log("Addition of 2 No's=".concat(Add_or_Concate(10, 10)));
console.log("String Concatenation=".concat(Add_or_Concate('a', 10)));
//function
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    else if (typeof padding === "string") {
        return padding + value;
    }
    else {
        throw new Error("Expected string or number,get'".concat(typeof padding, "'."));
    }
}
console.log(padLeft("world", "global"));
