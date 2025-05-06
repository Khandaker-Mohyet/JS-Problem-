function getLast(numbers) {
  if (Array.isArray(numbers) == false) {
    return "Please provide an array"
  }
  return numbers[numbers.length - 1]
}

const last = [2, 3, 4, 5]
console.log(getLast(last))