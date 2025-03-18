function oddToEven(numbers) {
  const even = []
  for (number of numbers) {
    if (number % 2 === 1) {
      even.push(number-1)
    }
  }
  return even;
}

console.log(oddToEven([10,14,13, 15]))
