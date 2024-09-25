//for loop:
//for loop
//for..of loop
//for..in loop
//while
//do-while
//1 to 10
for (var i = 1; i < 10; i++) {
    console.log(i);
}
//0 2 4 6 8 10
for (var i = 0; i <= 10; i = i + 2) {
    console.log(i);
}
// for..of loop:
var number = [10, 200, 3000, 40000];
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var n = number_1[_i];
    console.log(n);
    if (n === 200) {
        console.log("hi");
        break;
    }
}
console.log("-----------");
//for..in loop:
var num = [10, 200, 3000, 40000, 555555];
for (var i in num) {
    console.log(i);
    console.log(i + "=" + num[i]);
}
var info = "Hello World";
for (var _a = 0, info_1 = info; _a < info_1.length; _a++) {
    var c = info_1[_a];
    console.log(c);
}
