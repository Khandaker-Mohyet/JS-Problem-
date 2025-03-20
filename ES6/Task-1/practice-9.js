function interest(name = { principal: 1000, rate: 5 }) {
  const principal = name.principal;
  const rate = name.rate;
  const result = principal * rate / 100
  return result
}
console.log(interest({ principal: 5000, rate: 5 }))