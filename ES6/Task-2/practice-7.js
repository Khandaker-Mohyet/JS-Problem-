const student = {
  name: "Khandaker Mohyet",
  age: 26,
  subject: [75, 71, 73]
}
let sum = 0
const totalMark = student.subject
for (mark of totalMark) {
  sum = sum + mark;
}
const length = totalMark.length
const result = `The average mark of ${student.name} = ${sum / length}`;
console.log(result)