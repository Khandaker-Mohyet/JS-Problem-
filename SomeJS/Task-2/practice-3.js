
let count = 0;

const intervalId = setInterval(() => {
  console.log("I am learning JavaScript");
  count++;

  if (count === 6) {
    clearInterval(intervalId);
  }
}, 2000);