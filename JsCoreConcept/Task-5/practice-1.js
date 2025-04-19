function sum(a, b, callback) {
  const result = a + b;
  callback(result)
}
function printResult(value) {
  console.log("The sum is:", value)
}
sum(5, 7, printResult)