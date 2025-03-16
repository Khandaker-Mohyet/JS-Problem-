function negative(numbers) {
  let sum = 0;
  for (num of numbers) {
    if (num < 0) {
      sum = sum + num;
    }
  }
  return sum;
}
console.log(negative([-12, -10, 14, -23, 15]))