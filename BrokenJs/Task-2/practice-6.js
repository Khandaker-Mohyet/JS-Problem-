function getSum (...all) {
  let sum = 0
  const length = all.length
  for (num of all) {
    sum = num + sum
  }
  return sum / length;
}
console.log(getSum(3, 5, 4, 6, 7))