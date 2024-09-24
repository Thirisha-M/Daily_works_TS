
//Funtion Type

// let greet:Function;
// greet= () => { 
//     return"Hello"
// } 
// console.log(greet);
// //Function with Parameter

//  let add:Function;
//  add=(a:number,b:number)=>{
//     return(add(10,20))
//  }
// console.log(add(15,15)) ;

//Function with Return type

// let add2:Function;
// add2=(a:number,b:number):number=>{
//     return a+b;
// }
// console.log(add2(15,47));

// //Function with Union Type Params

// let add1:Function;
// add=(a:number,b:number,c?:(number|string)):number=>{
//     if(typeof c=== 'number'){
//         return a+b+c;
//     }
//     return a+b;
    
// }
// console.log(add(15,47));

// //Function with default value
// let add3:Function;
// add3=(a:number,b:number,c:(number|string)=10):number=>{
//     if(typeof c=== 'number'){
//         return a+b+c;
//     }
//     return a+b;
    
// }
// console.log(add3(15,47));

// //Function with Type alias params

// type StrOrNum1=string|number
// let addition:Function;
// add3=(a:number,b:number,c:StrOrNum1=10):number=>{
//     if(typeof c=== 'number'){
//         return a+b+c;
//     }
//     return a+b;
    
// }
// console.log(add3(15,47));

// //Function with object params
// type User={
//     name:string,age:number
// }
// let printObject = (user:User)=>{
//     console.log(`name is ${user.name}and age is${user.age}`)
// }
// printObject({name:'Test',age:30})

//rest params

let add4:Function;
add4=(a:number,b:number,...c:number[]):number=>{
    console.log(c)
    let d=c.reduce((x,y) => x+y ,0)
    return a+b+d;
    
}
console.log(add4(15,47,1,2,38,98));

//Function Signature

let add5:(x:number,y:number,...z:number[])=>void
add5=(a:number,b:number,...c:number[]):number=>{
    console.log(c)
    let d=c.reduce((x,y) => x+y ,0)
    return a+b+d;
    
}
console.log(add5(15,47,1,2,38,98));
