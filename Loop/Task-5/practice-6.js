let sum = 0;
for (let i = 1; i <= 50; i++){
  if (i % 3 == 0 && i % 4 == 0) {
    console.log(i)
    sum = sum + i
  }
}
console.log("sum = ", sum)