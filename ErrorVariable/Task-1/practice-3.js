function getArea(num1, num2) {
  if (typeof num1 !== 'number' && typeof num2 !== 'number') {
    return 'Please provide a number'
  }
  const area = num1 * num2;
  return area;
}

console.log(getArea(5, 7));