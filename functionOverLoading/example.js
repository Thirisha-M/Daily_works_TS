//you have a multiple function
//1.with same name
//2.but,different parameter type and return type 
//3.however,number of parameter should be same or if you want additional parameter in function you can use optional or default type
//fucntion implemention with body
function add(a, b) {
    return a + b;
}
console.log(add(30, 40)); //70
console.log(add("hello", "world")); //helloworld
console.log(add(false, true)); //1
//function implementation  with body 
function add(a, b, c) {
    return a + b;
}
console.log(add(10, 20, 30));
