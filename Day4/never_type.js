// //nevertype used for Errorthrow and infiniteloop
function getArea(shape) {
    switch (shape) {
        case "circle":
            return Math.PI * 1 * 1;
        case "square":
            return 1 * 1;
        case "triangle":
            return 0.5 * 1 * 1;
        default:
            var Check = shape;
            throw new Error("Unhandled case: ".concat(shape));
    }
}
console.log(getArea("circle"));
