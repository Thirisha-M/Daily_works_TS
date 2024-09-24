;
function getproduct(id) {
    return {
        id: id,
        name: "Awesome Gadget ".concat(id),
        price: 99.5
    };
}
var showproduct = function (_a) {
    var name = _a.name, price = _a.price;
    console.log("The product ".concat(name, " costs$").concat(price, "."));
};
var product = getproduct(1);
showproduct({ name: product.name, price: product.price });
