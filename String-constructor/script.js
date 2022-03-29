const comida = "Pizza";
const liquido = new String("Água");
const ano = new String("2018");

const frase = "A melhor comida ";

console.log(frase[frase.length - 1]);

const linguagem = "Javascript";

const fraseFinal = frase.concat(linguagem, "!!");

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

transacao1.slice(0, 3);

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, "."));
});

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";

listaItens = listaItens.replace(/[ ]+/g, ", ");
console.log(listaItens);

const arrayLista = listaItens.split(", ");
console.log(arrayLista);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const novoHtml = htmlArray.join("section");
