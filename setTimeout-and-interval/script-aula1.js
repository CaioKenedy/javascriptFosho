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
