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
//square pattern
function squarePattern(n) {
    for (var i = 0; i < n; i++) {
        var row = "";
        for (var j = 0; j < n; j++) {
            if (i == 0 || j == 0 || i == n - 1 || j == n - 1) {
                row += "*";
            }
            else {
                row += " ";
            }
        }
        console.log(row); // Print the entire row once.
    }
}
squarePattern(5);
