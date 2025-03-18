function oddArr(numbers) {
  const odd = []
  for (number of numbers) {
    if (number % 2 === 1) {
      odd.push(number)
    }
  }
  if (odd.length === 0) {
    return 0
  }
  const newOdd = []
  for (num of odd) {
    const doubbleOdd = num * 2;
    newOdd.push(doubbleOdd)
  }
    return newOdd;
}

console.log(oddArr([9,14,13]))
