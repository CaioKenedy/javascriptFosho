const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

dados[2]("Ford");
dados[1][2].cor; // azul

const carros = new Array("Ford", "Fiat", "Honda");

carros[2] = "Ferrari";
carros[3] = "Kia";

let li = document.querySelectorAll("li");
li = Array.from(li);

Array.of(10); // cria array com numero 10
Array(5); // array vazia com 5 itens

const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];

console.log(frutas[2][0].length); // acessa o item 2 da array (outra array) depois o primeiro item dela (UVA ROXA) entao, seu comprimeto

const transporte1 = ["Barco", "Aviao"];
const transporte2 = ["Carro", "Moto"];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, "Van");
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];
