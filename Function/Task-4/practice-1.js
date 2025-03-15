function what(nums) {
  const len = nums.length;
  if (len % 2 === 0) {
    return "even"
  }
  return "odd"
}
console.log(what([12, 12, 13, 12]))