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
