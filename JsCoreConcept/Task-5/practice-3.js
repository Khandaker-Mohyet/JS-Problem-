function numberProcessor(a, callback) {
  const result = a /5;
  callback(result)
}
function printResult(value) {
  console.log("The sum is:", value)
}
numberProcessor(10, printResult)