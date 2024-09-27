/*Declare two variables x and y with numerical values. Swap their values without using a third variablep*/
function swapNumbers(x, y) {
    x = x + y;
    y = x - y;
    x = x - y;
    return [x, y];
}
console.log(swapNumbers(10, 20));
