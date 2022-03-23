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
