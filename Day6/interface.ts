//Interface-only work with object

interface emp{
    name:string,
    age:number
}
const Emp:emp={
    name:'Divya',
    age:21
}
console.log(Emp);

//function Interface

interface Function{
    (x:number,y:number):number
}
let addition:Function=(p1:number,p2:number)=>{
    return p1+p2
}

//Extending Interface

interface employee extends emp{
    employeeId:number
}
const Employee:employee={
    name:"abi",
    age:30,
    employeeId:100
}



