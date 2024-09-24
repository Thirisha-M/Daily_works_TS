//function
let multiply= (number) => {
    return 10*number
}
console.log(multiply(50));

//Implicit
let sample=[1,2,3];
let sample1=["a","b","c"];
let sample2=[true,false];
console.log(sample,sample1,sample2);

//Explicit 
let sample3: number[]=[1,2,3,4];
let sample4:string[]=["a","b","c"];
let sample5:boolean[]=[true,false];
console.log(sample3,sample4,sample5);
//Declare and Assign later

let sample6:number[];
sample6=[]
sample6.push(5);
let sample7:string[];
sample7=[]
sample7.push("Sasvika");
console.log(sample6,sample7);

//read only

let sample8:readonly number[]=[1,2,3,]
console.log(sample8);

