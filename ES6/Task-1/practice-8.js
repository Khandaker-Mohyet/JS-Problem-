function allSum(number = [5, 10, 15]) {
  let sum = 0
  for (num of number) {
    sum = num + sum
  }
  return sum;
}
console.log(allSum([5, 10, 5]))