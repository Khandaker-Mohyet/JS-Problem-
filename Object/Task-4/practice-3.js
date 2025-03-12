const book = {
  title: "Harry Potter",
  author: "JK Rowling",
  page: 500
}
Object.seal(book)
book.author = "Khandaker Mohyet";
console.log(book)