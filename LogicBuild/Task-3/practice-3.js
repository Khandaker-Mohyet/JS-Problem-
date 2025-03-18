function oddOrEven(numbers) {
  const odd = []
  for (number of numbers) {
    if (number % 2 === 1) {
      odd.push(number)
    }
  }
  
  if (odd.length === 0) {
    return "No odd numbers found"
  } else {
    return "odd number found"
  }
  
}

console.log(oddOrEven([14]))