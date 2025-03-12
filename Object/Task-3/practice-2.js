const article = {
  title: "Learning js",
  category : "Programming"
}
const profileKeys = Object.keys(article);
const hasName = profileKeys.includes("author");
console.log(hasName)