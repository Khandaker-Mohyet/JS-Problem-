const headphone = {
  brand: "sony",
  price: 3000,
  color: "red"
}
Object.freeze(headphone)
headphone.warranty = "6 month";
console.log(headphone)