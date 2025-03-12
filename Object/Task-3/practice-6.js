const books = {
  book1: "Harry Potter",
  book2: "The Hobbit",
  book3: "Game of THrones",
}
const values = Object.values(books)
for (value of values) {
  console.log(value)
}