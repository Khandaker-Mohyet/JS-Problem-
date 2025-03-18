function evenAverage(numbers) {
  const even = []
  for (number of numbers) {
    if (number % 2 === 0) {
      even.push(number)
    }
  }
  if (even.length === 0) {
    return 0
  }
  let sum = 0
  for (num of even) {
    sum = sum + num;
  }
  const average = sum / even.length
    return average;
  
}

console.log(evenAverage([10,14,13]))
