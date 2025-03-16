function pricePerMarks(marks) {
  if (marks <= 10) {
    return 100
  } else if (marks <= 20) {
    return 300
  } else if (marks <= 50) {
    return 1000
  } else {
    return marks*100
  }
}
console.log(pricePerMarks(55))