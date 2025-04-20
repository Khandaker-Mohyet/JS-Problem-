const texRate = 15;
function tex(income) {
  const result = income / 100 * texRate;
  return result;
}
console.log(tex(20000));