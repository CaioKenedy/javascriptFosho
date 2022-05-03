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
  // o nome do metodo fica a seu critério, utilizei element.
  element() {
    const buttonElement2 = document.createElement("button");
    buttonElement2.innerText = this.text;
    buttonElement2.style.background = this.background;
    return buttonElement2;
  }
  // novamente, o nome do metodo você que escolhe, optei por appendTo
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    return targetElement;
  }
}

const redButton = new Button2("Comprar", "Red");

console.log(redButton.appendTo("body"));

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

// Podemos passar qualquer valor dentro de uma propriedade

class Button3 {
  constructor(options) {
    this.options = options;
  }
}

const blueOptions = {
  backgroundColor: "blue",
  color: "white",
  text: "Click",
  borderRadius: "4px",
};

const blueButton3 = new Button3(blueOptions);

// Static vs Prototype

class Button4 {
  constructor(options) {
    this.options = options;
  }
  static createButton(text, background) {
    const buttonElement4 = document.createElement("button");
    buttonElement4.innerText = text;
    buttonElement4.style.background = background;
    return buttonElement4;
  }
}

const options = {
  backgroundColor: "blue",
  color: "white",
  text: "Click",
  borderRadius: "4px",
};

const blueButtonStatic = new Button4(options);
console.log(blueButtonStatic);

// Posso utilizar o static para retornar uma nova funcao, exemplo static blueButton(text) { return new Button(text, "blue")} . Assim, sempre criarei botoes azuis e só o texto será alterado.
