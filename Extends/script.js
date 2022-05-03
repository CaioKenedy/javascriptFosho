class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log("Acelerou");
  }
}

// estende um objeto generico para um mais especifico

class Moto extends Veiculo {
  //posso usar o super para extender o construtor
  constructor(rodas, capacete) {
    super(rodas);
    this.capacete = capacete;
  }
  // também posso usar a palavra Super, para acessar um metódo herdado. exemplo super.acelerar()
  testar() {
    super.acelerar();
  }
  empinar() {
    console.log("Empinou com " + this.rodas + " rodas");
  }
  //também posso sobre escrever um metodo, exemplo, posso por o acelerar() da classe anterior aqui.
}

const honda = new Moto(2, true);
honda.empinar();
honda.testar();
