<<<<<<< HEAD
// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll("p");

paragrafos.forEach((item) => {
  console.log(item);
});
// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText);
});
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
=======
// Retorne no console todas as imagens do site
const allImg = document.querySelectorAll("img");
console.log(allImg);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const sixImg = document.querySelectorAll("[src^='./img/imagem']");
console.log(sixImg);
// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll("[href^='#']");

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);

// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[paragrafos.length - 1]);
>>>>>>> 707e8bee44b68bcfb498b6e1dc7f709a60128535
