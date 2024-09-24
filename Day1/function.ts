interface product{
    id:number;
    name:string;
    price:number;
};
function getproduct(id):product{
    return{
        id:id,
        name:`Awesome Gadget ${id}`,
        price:99.5
    }
}
const showproduct=({name,price}:{name:string,price:number})=>{
    console.log(`The product ${name} costs$${price}.`);
};
const product=getproduct(1);
showproduct({name:product.name,price:product.price});