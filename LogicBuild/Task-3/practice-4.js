function oddAverage(numbers) {
  const odd = []
  for (number of numbers) {
    if (number % 2 === 1) {
      odd.push(number)
    }
  }
  if (odd.length === 0) {
    return 0
  }
  let sum = 0
  for (num of odd) {
    sum = sum + num;
  }
  const average = sum / odd.length
    return average.toFixed(2);
  
}

console.log(oddAverage([9,11,13,17,9]))
