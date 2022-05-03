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
