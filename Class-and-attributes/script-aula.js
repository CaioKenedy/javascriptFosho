const menu = document.querySelector(".menu");

menu.classList.add("ativo");

menu.className += " vermelho";

console.log(menu.classList);

const animais = document.querySelector(".animais");

console.log(animais.attributes);

const img = document.querySelector("img");

img.setAttribute("alt", "Raposa vermelha");

console.log(img.getAttribute("src"));

const temAlt = img.hasAttribute("alt");
