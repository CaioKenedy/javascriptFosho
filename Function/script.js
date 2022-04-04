const frutas = ["Uva", "Maça", "Banana"];

Array.prototype.mostrarThis = function () {
  console.log(this);
};

Array.prototype.pop.call(frutas);
frutas.pop();

// ATÉ AQUI TA UM POUCO CONFUSO, QUANDO REALMENTE VAMOS UTILIZAR ESSE ARRAY.PROTOTYPE???

const li = document.querySelectorAll("li");

const filtro = Array.prototype.filter.call(li, function (item) {
  return item.classList.contains("ativo");
});
