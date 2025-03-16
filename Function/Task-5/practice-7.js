function multiply(numbers) {
  let result = 1;
  for (num of numbers) {
    if (num % 3 === 0) {
      result = result * num;
    }
  }
  return result;
}
console.log(multiply([12, 9, 14, 23, 15]))