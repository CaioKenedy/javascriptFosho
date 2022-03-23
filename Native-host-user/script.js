// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.fullName = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const caio = new Pessoas("Caio", "Kenedy", 26);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

// NodeList / forEach, item, entries, etc
// HTMLCollection / item, length, namedItem
// Document / possui muitos só checar o .prototype ou Object.getOwnPropertyNames(NodeList.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; // HTMLLIELEMTENT
li.click; // FUNCTION
li.innerText; // STRING
li.value; // NUMBER
li.hidden; // BOOLEAN
li.offsetLeft; // NUMBER
li.click(); // UNDEFINED

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String
