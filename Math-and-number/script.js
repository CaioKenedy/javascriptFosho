const ano = 2022;
const preco = new Number(23);

Number.isNaN(5); // false
Number.isInteger(23.6); // false
console.log(Number.parseFloat("99.40")); // parseInt deixa inteiro
const carro = 23000.33886;
console.log(+carro.toFixed(3));
const aguaPreco = 2.99;
console.log(aguaPreco.toString(10));

let valor = 23.24;
valor = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
//////////////////////////////////////////////////////

Math.max(5, 34, 54, 2, 5);

const aleatorio = Math.round(Math.random() * 1000);
console.log(aleatorio);

const aleatorioEntre = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;

console.log(aleatorioEntre);
