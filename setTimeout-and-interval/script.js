function loop(text) {
  console.log(text);
}
setInterval(loop, 1000, "after 1s");

let i = 0;
const myLoop = setInterval(() => {
  console.log(i++);
  if (i > 20) {
    clearInterval(myLoop);
  }
}, 1000);
