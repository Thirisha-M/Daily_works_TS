// //you have a multiple function
// //1.with same name
// //2.but,different parameter type and return type 
// //3.however,number of parameter should be same or if you want additional parameter in function you can use optional or default type


// //function implementation
// function add(a:number,b:number):number 
// function add(a:string,b:string):string
// function add(a:boolean,b:boolean):boolean
// //need to implement this only once
// function add(a:any,b:any):any{
//     return a+b
// }
// console.log(add(30,40));//70
// console.log(add("hello","world"));//helloworld
// console.log(add(false,true));//1


// //example2
// function add(a:number,b:number,c:number):number 
// function add(a:string,b:string):string
// function add(a:boolean,b:boolean):boolean

// //function implementation  with body 
// function add(a:any,b:any,c?: number){
//     return a+b+c
// }
// console.log(add(10,20,30))

// //example3

// function add(a:number,b:number,c:number):number 
// function add(a:number,b:number):number
// function add(a:string,b:string):string

// function add(a:any,b:any,c?:number){
//     if(typeof a==='number' && typeof b==='number')
//         return a+b;
//     else if(typeof a==='string' && b==='string')
//         return a+b;
// }



