/*Write a TypeScript program that declares a variable 'result' that can hold either a 'string' or a 'number'.
 Now write a function that takes an argument of type 'string | number | boolean' and logs its type.*/

let result: string | number|boolean;
function logType(value: string | number | boolean): void {
    console.log(`The type of the value is: ${typeof value}`);
}
result = "Hello, TypeScript!";
logType(result);
result = 42;
logType(result);
result=true
logType(result);

/*----------------------------------------------------------------------------------------------------------------*/
/* Write a TypeScript program that creates a function combine that accepts two parameters of types boolean and number.
 It returns a value that can be either a boolean or a number. Use a union type to achieve this.*/

function combine(flag: boolean, num: number): boolean | number {
    if (flag){
        return num;
    } else {
        return !flag; 
    }
const result1 = combine(true, 42);
console.log(result1); 

const result2 = combine(false, 42);
console.log(result2);
/*----------------------------------------------------------------------------------------------------------------*/
}

/* Write a TypeScript program that defines a TypeScript interface Car with properties make and model of type string. 
Create a type Bus with properties make and model of type string and an additional property payloadCapacity of type number. 
Now, create a type Vehicle that represents either a Car or a Truck using a union type.*/



