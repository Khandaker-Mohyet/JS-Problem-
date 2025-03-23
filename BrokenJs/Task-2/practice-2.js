const project = { id: 101, title: "WebApp", budget: 3000, client: "Tech Corp" }
const { title, ...details } = project
console.log(details)