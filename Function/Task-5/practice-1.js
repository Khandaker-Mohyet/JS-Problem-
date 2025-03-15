function sumOfOdd(numbers) {
  let sum = 0;
  for (num of numbers) {
    if (num % 2 === 1) {
      sum= sum+num
    }
  }
  return sum;
}
console.log(sumOfOdd([5,15,8,7]))