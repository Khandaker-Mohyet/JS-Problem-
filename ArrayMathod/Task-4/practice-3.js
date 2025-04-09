const products = [
  {
    name: "Pen",
    price: 5
  },
  {
    name: "Book",
    price: 50
  },
  {
    name: "Bag",
    price: 100
  },
]

const result = products.reduce((a, b) => a + b.price, 0);
console.log(result)