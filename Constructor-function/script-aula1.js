// function Carro() {
//   this.marca = "Marca";
//   this.preco = 0;
// }

// const Honda = new Carro();
// Honda.marca = "Honda";
// Honda.preco = "5000";
// const Fiat = new Carro();
// Fiat.marca = "Fiat";
// Fiat.preco = "3000";

function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro("Honda", 5000);
const fiat = new Carro("Fiat", 3000);

function Veiculo(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const camaro = new Veiculo("Chev", 1000);
