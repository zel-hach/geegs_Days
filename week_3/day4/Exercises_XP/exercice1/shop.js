const products = require('./product.js');


const findProduct = (name) => {
    const product = products.default.find(p => p.name === name);
    if (!product) 
        return "Product not found";
    return product;
}

console.log(findProduct("Laptop"));