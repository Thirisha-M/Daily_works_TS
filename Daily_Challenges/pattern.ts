//rightangle triangle

function rightAngledTriangle(n: number): void {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}
console.log(rightAngledTriangle(5));

//Inverted Triangle

function invertedRightAngledTriangle(n: number): void {
    for (let i = n; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}
console.log(invertedRightAngledTriangle(5));

