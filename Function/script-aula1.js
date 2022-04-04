function areaQuadrado(lado) {
  return lado * lado;
}

const perimetroQuadrado = new Function("lado", "return lado * 4");

function somar(n1, n2) {
  return n1 + n2;
}

function dizerEai() {
  console.log("Eai meu mano");
}

dizerEai.call();

const carro = {
  marca: "Ford",
  ano: 2022,
};

function descricaoCarro() {
  console.log(this.marca + " " + this.ano);
}

descricaoCarro.call({ marca: "Chevrolet", ano: 2009 });

const carros = ["Civic", "Corolla", "Fusca"];
const frutas = ["Banana", "Uva", "Pêra"];
carros.forEach((carro) => {
  console.log(carro);
});

carros.forEach.call(carros, (carro) => {
  console.log(carro);
});

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe);
};

const ul = new Dom("ul");

ul.ativo("ativarzin");

const li = {
  element: document.querySelector("li"),
};

ul.ativo.call(li, "ativo"); // utiliza o que ja foi setado no UL e so que agora para o LI, para funcionar o CALL o Objeto precisa ser sempre parecido ao objeto original.
