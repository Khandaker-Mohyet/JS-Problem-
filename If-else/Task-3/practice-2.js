const price = 1000;
const age = 26;
if (age > 60) {
  const discount = price / 100 * 50;
  const pay = price - discount;
  console.log(pay)
} else if (age < 12) {
    console.log(0)
} else {
  console.log(price)
}