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
