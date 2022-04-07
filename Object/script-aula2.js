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

// bind poderia ser substituido por call, entretanto, bind precisa ser ativado

// function.apply()

const numeros = [23, 1, 45, 64, 34, 18, 236, 89];
Math.max.apply(null, numeros);
Math.min.call(null, 1002, 50003, 405, 678);

// apply e call funcionam da mesma forma, entretanto, apply precisa ser passado uma array

const carro = {
  marca: "Ferrari",
  ano: 2022,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

const honda = {
  marca: "Honda",
};

const acelerarHonda = carro.acelerar.bind(honda);

console.log(acelerarHonda(300, 20));

// argumentos comuns

function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.8);
