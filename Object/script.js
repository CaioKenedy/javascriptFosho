// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

paragrafosArray = Array.from(paragrafos);

const totalChar = paragrafosArray.reduce.call(
  paragrafosArray,
  (acumulador, item) => {
    return acumulador + item.innerText.length;
  },
  0
);

console.log(totalChar);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerHTML = conteudo) : null;
  return elemento;
}

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const titulo = criarElemento.bind(null, "h1", "titulo");
