//Array
var userArray = ['abi', 30, false];
userArray[0] = 40;
console.log(userArray);
//Tuple
var userTuple = ['abi', 30, false];
userTuple[0] = "Thirisha";
userTuple.push(4);
console.log(userTuple);
//readonly
var userTuple1 = ['abi', 30, false];
userTuple.push(5); //error
//Named
var userTuple2 = ['abi', 30, false];
//Accessing Named Tuple,Destructuring
var userName = userTuple[0], age = userTuple[1], isEng = userTuple[2];
console.log(userName);
