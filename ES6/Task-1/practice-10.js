function texAmount(name = { salary: 50000, tex: 10 }) {
  const salary = name.salary;
  const tex = name.tex;
  const texPrice = salary * tex / 100
  const result = salary - texPrice;
  return result
}
console.log(texAmount({ salary: 60000, tex: 10 }))