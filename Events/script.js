// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll("a[href^='#']");

function handleEvent(event) {
  links.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.toggle("ativo");
  event.preventDefault();
}

links.forEach((link) => {
  link.addEventListener("click", handleEvent);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const body = document.querySelectorAll("body *");

function mostrarConteudo(event) {
  console.log(event.target);
}

body.forEach((element) => {
  element.addEventListener("click", mostrarConteudo);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function mostrarConteudo(event) {
  event.target.remove();
}

body.forEach((element) => {
  element.addEventListener("click", mostrarConteudo);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function KeyboardEvent(event) {
  if (event.key === "t") {
    document.body.classList.toggle("ultra");
  }
}

window.addEventListener("keydown", KeyboardEvent);
