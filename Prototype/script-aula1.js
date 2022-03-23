function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  return this.nome + " andou";
};

Pessoa.prototype.cagar = function () {
  return this.nome + " cagou";
};

const caio = new Pessoa("Caio", 26);
console.log(Pessoa.prototype);

const pais = "Brasil";
const cidade = new String("Rio");

const listaAnimais = ["Cachorro", "Gato", "Peixe", "Passaro"];

const lista = document.querySelectorAll("li");
const listaArray = Array.prototype.slice.call(lista);
const listaArrayNova = Array.from(lista);

const Carro = {
  marca: "Ford",
  preco: 2000,
  acelerar() {
    return true;
  },
};
