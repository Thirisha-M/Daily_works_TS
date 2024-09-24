/*syntax for annotation
let variableName:type;
let variableName:type=value;
const constName:type=value;
*/

//number annotation for a variable

let Counter:number;
Counter=1;
console.log(Counter);

//primitive type annotation

let name1:string='john';
let age:number=35;
let active:boolean=true;
console.log(name1,age,active);

/* syntax for array annotation
let Arrayname:type[];
let Arrayname:type[]=[values];
*/

let names:string[]=['abi','thirsha','maggi','vidhu'];
console.log(names);

//object type annotation

let person:{
name2:string;
age:number;
}
person={
    name2:'divya',
    age:20,
}
console.log(person);

//Function annotation

let greeting:(name:string)=>string;
greeting=function(name:string){
    return `Hi ${name}`;
};
console.log(greeting('Sasvika'));



