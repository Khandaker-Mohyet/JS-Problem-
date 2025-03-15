function isEligible(num){
  if (num >= 18) {
  return "Eligible for Voting"
  }
  return "Not Eligible"
}
console.log(isEligible(26));