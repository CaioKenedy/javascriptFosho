const h1 = document.querySelector("h1");

h1.innerHTML = "Geleia";

// outerHTML pega todo o html do elemento, toda estrutura
// innterHTML pega o html interno
// innerText pega apenas o texto, sem tags

const listaFaq = document.querySelector(".faq-lista");
console.log(listaFaq.children[0].nextElementSibling);

const animais = document.querySelector(".animais");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");
const mapa = document.querySelector(".mapa");

animais.appendChild(titulo);

// contato.appendChild(lista); // move lista para o final de contato
// contato.insertBefore(lista, titulo); // insere a lista antes de titulo
// contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(lista, titulo); // substitui titulo por lista

// --------------------------- //

const novoh1 = document.createElement("h1");
novoh1.innerText = "novo titulo lekote";
novoh1.classList.add("titulo");

mapa.appendChild(novoh1);

// ----- clonar elementos ---------------- //

const menu = document.querySelector(".menu");

const novoMenu = menu.cloneNode(true);
const copy = document.querySelector(".copy");
copy.appendChild(novoMenu);

//------------ substituicao ------- //

// const faq = document.querySelector(".faq");
// const faqHtml = faq.innerHTML;
// const animaisExer = document.querySelector(".animais");
// const animaisHtml = animaisExer.innerHTML;
// const faqLista = document.querySelector(".faq-lista");

// faq.replaceChild(animaisExer, faqLista);

const animaisQ = document.querySelector(".animais");
const faq = document.querySelector(".faq");

faq.innerHTML = animais.innerHTML;
