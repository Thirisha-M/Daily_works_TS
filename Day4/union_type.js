// //More than one Type=union type
// //Union Type- OR -| 
// //basic type
// let empId: string | number | boolean;
// empId = 42;
// empId = '21ucso42'
// empId = true;
// //example 1
// let unionArray: (string | number | boolean)[] = []
// {
//     unionArray.push(3);
//     unionArray.push("Sasvika");
//     unionArray.push(true);
// }
// console.log(unionArray);
// //example 2
// type Shape = "circle" | "square" | "triangle";
// function getArea(shape: Shape): number {
//     switch (shape) {
//         case "circle":
//             return Math.PI * 1 * 1;
//         case "square":
//             return 1 * 1;
//         case "triangle":
//             return 0.5 * 1 * 1;
//         default:
//             const ExhaustiveCheck: never = shape;
//             throw new Error(`Unhandled case: ${shape}`);
//     }
// }
// console.log(getArea("circle"));
// //example 3
// const Add_or_Concate = (a: string | number, b: string | number): string | number => {
//     if (typeof a === 'string' && typeof b === "string") {
//         return `${a}${b}`;
//     } else if (typeof a === 'number' && typeof b === "number") {
//         return a + b;
//     } else {
//         return 0;
//     }
// };
// console.log(`String Concatenation=${Add_or_Concate('abc', 'pqr')}`);
// console.log(`Addition of 2 No's=${Add_or_Concate(10, 10)}`);
// console.log(`String Concatenation=${Add_or_Concate('a', 10)}`);
// //function
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
console.log(padLeft("world", true));
