//for loop:
    //for loop
    //for..of loop
    //for..in loop
//while
//do-while

//1 to 10
for(let i=1;i<10;i++){
    console.log(i);
}
//0 2 4 6 8 10
for(let i=0;i<=10;i=i+2){
    console.log(i);
}
// for..of loop:
let number=[10,200,3000,40000];
for(let n of number){
    console.log(n);
    if(n === 200){
        console.log("hi");
        break;
    }
}
console.log("-----------")
//for..in loop:
let num=[10,200,3000,40000,555555];
for(let i in num){
    console.log(i)
    console.log(i + "=" + num[i]);

}

let info="Hello World";
for(let c of info ){
    console.log(c);
}

//whileloop

