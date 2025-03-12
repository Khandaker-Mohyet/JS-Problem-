const building = {
  floors: 10,
  address: {
    street: "Main Road",
    city: "Dhaka"
  },
  type: "Commercial"
}
for (const key in building) {
  const value = building[key]
  console.log(key,value)
}