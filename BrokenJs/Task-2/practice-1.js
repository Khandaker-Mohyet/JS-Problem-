const product = { name: "Laptop", price: 50000, brand: "Dell" }
const { name, ...details } = product;
console.log(name);
console.log(details)