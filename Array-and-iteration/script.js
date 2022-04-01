const carros = ["Ford", "Fiat", "Honda"];

carros.forEach((item, index, array) => {
  console.log(item);
});

const li = document.querySelectorAll("li");

li.forEach((i) => i.classList.add("ativa"));

const carrinhos = ["Porsche", "Audi", "Mercedes"];

const newCarrinhos = carros.map((item) => {
  return "Carro " + item;
});

const numeros = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map((n) => n * 2);

console.log(numerosX2);

// const numeros = [2, 4, 6, 8, 10, 12, 14];
// const numerosX3 = numeros.map((n) => n * 3);

// numerosX3; // [6, 12, 18, 24, 30, 36, 42];

// console.log(numerosX3);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const tempoAulas = aulas.map((aula) => aula.min);

const nomeAulas = aulas.map((aula) => aula.nome);

// REDUCE //

const acumulando = [10, 25, 30];
const total1 = acumulando.reduce((acumulador, atual) => {
  return acumulador + atual;
});

const total2 = acumulando.reduce((acc, cur) => acc + cur, 100);

const maiorValor = acumulando.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
});

console.log(maiorValor);
