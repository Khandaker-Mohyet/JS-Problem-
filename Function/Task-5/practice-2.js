function isSmaller(nums) {
  const first = nums[0]
  const secound = nums[1]
  if (first > secound) {
    return first
  }
  return secound
}
console.log(isSmaller([20,45,78]))