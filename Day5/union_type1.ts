//More than one Type=union type

//Union Type- OR -| 

//Implicit or Type Inference

let unionArray=[1,'thirisha',false]
{
    unionArray.push(3);
    unionArray.push("Sasvika");
    unionArray.push(true);
}
console.log(unionArray);

//Explicit 

let unionArray1:(string|number|boolean)[]=[]
{ 
    unionArray1.push(3);
    unionArray1.push("Sasvika");
    unionArray1.push(true);
}
console.log(unionArray1);