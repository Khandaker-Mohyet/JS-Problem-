function age(num) {
  if (num < 18) {
    return 18
  } else if(num<45){
    return num
  } else {
    return 45
  }
}
console.log(age(26))