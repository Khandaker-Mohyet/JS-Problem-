function greeting(greatingHandler) {
  greatingHandler()
}
function morningGreet() {
  console.log('Good Morning')
}
greeting(morningGreet)