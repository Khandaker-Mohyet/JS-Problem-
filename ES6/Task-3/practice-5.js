const sum = numbers => {
  const first = numbers[0]
  const length = numbers.length
  const lastLength = length - 1
  const last = numbers[lastLength]
  return first + last;
}
console.log(sum([5, 7, 9, 6, 10]))