function textPercent(income) {
  if (income <= 50000) {
    return 10
  } else if (income <= 100000) {
    return 20
  } else if (income <= 200000) {
    return 30
  } else {
    return 40
  }
}
console.log(textPercent(100001))