const player = {
  name: "Messi",
  goals: 800,
  club: "Inter Miami"
}
Object.freeze(player)
player.category = "Stricker";
console.log(player)