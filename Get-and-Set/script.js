const button = {
  get tamanho() {
    return this.numero || 100;
  },
  set tamanho(numero) {
    this.numero = numero * 3;
  },
};

// definindo valor estatico

const matematica = {
  get PI() {
    return 3.14;
  },
};

// Set para modificar propriedades

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};

// executando Set
frutas.nova = "Banana";
frutas.nova = "Morango";

class Button2 {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const type = this.elementType || "button";
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  set element(type) {
    this.this.elementType = type;
  }
}

const blueButton = new Button2("Comprar", "blue");
