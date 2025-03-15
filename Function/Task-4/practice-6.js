function nice(name1, name2) {
  const name1Length = name1.length;
  const name2Length = name2.length;
  if (name1Length > name2Length) {
    return true
  }
  return false
}
console.log(nice("Khandaker", "Mohyet"))