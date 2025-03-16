function arr(numbers) {
  let sum = 0
  for (num of numbers) {
    if (num % 4 === 0) {
      sum = sum + num;
    }
  }
  return sum
}
console.log(arr([2, 4, 5, 7, 8, 32, 45]))