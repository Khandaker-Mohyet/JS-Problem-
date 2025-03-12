const numbers = {
  a: 10,
  b: 20,
  c: 30,
  d: 40
}

const values = Object.values(numbers)
let sum = 0;
for (num of values) {
  sum = sum+num
}
console.log(sum)