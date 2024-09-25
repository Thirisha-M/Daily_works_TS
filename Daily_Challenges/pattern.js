//rightangle triangle
function rightAngledTriangle(n) {
    for (var i = 1; i <= n; i++) {
        var row = '';
        for (var j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}
console.log(rightAngledTriangle(5));
//Inverted Triangle
function invertedRightAngledTriangle(n) {
    for (var i = n; i >= 1; i--) {
        var row = '';
        for (var j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}
console.log(invertedRightAngledTriangle(5));
