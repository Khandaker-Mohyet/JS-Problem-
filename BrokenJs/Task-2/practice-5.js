function getSum (one, ...all) {
  let sum = 0
  for (num of all) {
    sum = num + sum
  }
  return sum
}
console.log(getSum(3, 5, 4, 6, 7))