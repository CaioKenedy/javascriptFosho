function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function () {
  const buttonElement = document.createElement("Button");
  buttonElement.innerText = this.text;
  buttonElement.style.background = this.background;
  return buttonElement;
};

const blueButton = new Button("Comprar", "Blue");

console.log(blueButton.element());

// ------ Usando Class para substituir constructor function

class Button2 {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  // o nome do callback fica a seu critério, utilizei element.
  element() {
    const buttonElement2 = document.createElement("button");
    buttonElement2.innerText = this.text;
    buttonElement2.style.background = this.background;
    return buttonElement2;
  }
}

const redButton = new Button2("Comprar", "Red");

console.log(redButton.element());

// Diferença entre Class e Constructor Function

class NomeDaClasse {
  constructor(propriedade) {
    this.propriedade = propriedade;
  }
  metodo1() {}
  metodo2() {}
}

function NomeDaFuncao(propriedade) {
  this.propriedade = propriedade;
}
NomeDaFuncao.prototype.metodo1 = function () {};
NomeDaFuncao.prototype.metodo2 = function () {};
