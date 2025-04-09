const products = [
  {
    name: "shampoo",
    price: 100
  },
  {
    name: "soap",
    price: 50
  },
  {
    name: "toothpast",
    price: 75
  },
]

const result = products.reduce((a, b) => a + b.price, 0);
console.log(result)