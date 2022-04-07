// Crie uma função que verifique
// corretamente o tipo de dado
function check(dado) {
  return Object.prototype.toString.call(dado);
}

const car = "Ronaldo";
// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const square = {};
Object.defineProperties(square, {
  sides: {
    value: 4,
    enumerable: false,
  },
});

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao);
Object.seal(configuracao);
Object.preventExtensions(configuracao);
// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

Object.getOwnPropertyNames(String);
Object.getOwnPropertyNames(Array);
