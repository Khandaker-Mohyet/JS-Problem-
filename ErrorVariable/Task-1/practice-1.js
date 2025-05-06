function first(str) {
  if (typeof str !== 'string') {
    return "Please provide a string"
  }
  return str.charAt(0); 

}

console.log(first("Mohyet"))