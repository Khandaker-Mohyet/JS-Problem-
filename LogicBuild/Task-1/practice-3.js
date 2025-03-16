function makeSecond(hour) {
  const menight = 60 * hour;
  const second = 60 * menight;
  return second;
}
console.log(makeSecond(10))