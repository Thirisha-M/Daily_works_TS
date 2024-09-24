//Array

let userArray=['abi',30,false]
userArray[0]=40
console.log (userArray)

//Tuple

let userTuple:[string,number,boolean]=['abi',30,false]
userTuple[0]="Thirisha";
userTuple.push(4)
console.log(userTuple)

//readonly
let userTuple1:readonly [string,number,boolean]=['abi',30,false]
userTuple.push(5);//error

//Named

let userTuple2:readonly[userName:string,age:number,isEng:boolean]=['abi',30,false]

//Accessing Named Tuple,Destructuring

let[userName,age,isEng]=userTuple
console.log(userName)