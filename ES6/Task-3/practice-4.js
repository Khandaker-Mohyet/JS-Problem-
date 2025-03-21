const person = {
  name: "Khandaker Mohyet",
  pocketMoney: 100
}
const money = value => {
  return value.pocketMoney / 5;
}
console.log(money(person))