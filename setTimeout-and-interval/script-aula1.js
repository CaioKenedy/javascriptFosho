const btn = document.querySelector("button");

btn.addEventListener("click", handleClick);

function handleClick() {
  setTimeout(() => {
    this.classList.add("active");
  }, 1000);
}

function wait(text) {
  console.log(text);
}

setTimeout(wait, 2000, "After 2s");

for (let i = 0; i < 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}

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
