//Basic Types

let empName2:any='Test'
console.log(empName2)
empName2=20
console.log(empName2)
empName2="Thirisha"
console.log(empName2)
empName2=true

//Array using anytype

let empName3:any[]=[]
{

    empName3.push("Thirisha")
    empName3.push(39)
    empName3.push(true)
}
console.log(empName3);

//object using anytype

type empdetaile={
    name:any;
    age:any;
}
let Empdetailes:empdetaile
{
    name:"thirisha"
    age:21
}

//null and undefined

let x:null=null;
let y:undefined=undefined