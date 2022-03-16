const listaAnimais = document.querySelector(".animais-lista");

const animaisTop = listaAnimais.offsetTop;

const height = listaAnimais.scrollHeight;

const primeiroh2 = document.querySelector("h2");
const h2left = primeiroh2.offsetLeft;

const h2rect = primeiroh2.getBoundingClientRect();

if (h2rect.top < 0) {
  console.log("passou do elemento");
}

console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.pageYOffset
);

const small = window.matchMedia("(max-width: 600px)");

if (small.matches) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}
