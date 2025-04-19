function showObjectProperties(obj, callback) {
  Object.entries(obj).map(([key, value]) => {
    callback(key, value);
  });
}

const person = {
  name: "Rahim",
  age: 25,
  city: "Dhaka"
};

showObjectProperties(person, (key, value) => {
  console.log(`${key}: ${value}`);
});