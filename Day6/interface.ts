// //Interface-only work with object

interface emp{
    name:string,
    age:number
}
const Emp:emp={
    name:'Divya',
    age:21
}
console.log(Emp);

//Extending Interface

interface employee extends emp{
    employeeId:number
}
const Employee:employee={
    name:"abi",
    age:30,
    employeeId:100
}


