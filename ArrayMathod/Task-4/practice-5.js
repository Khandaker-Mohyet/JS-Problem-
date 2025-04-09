const numbers = [10, 20, 30, 40, 50]
const result = numbers.reduce((max, current) => current > max ? current : max);
console.log(result)