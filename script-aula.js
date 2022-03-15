const animais = document.getElementById("animais");

const gridSection = document.getElementsByClassName("grid-section");

const primeiraLi = document.querySelector("li");

const primeiraUl = document.querySelector("ul");

const linksInternos = document.querySelector("[href^='#']");

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName("grid-section");

const gridSectionNode = document.querySelectorAll(".grid-section");

primeiraUl.classList.add("grid-section");

// console.log(gridSectionHTML);
// console.log(gridSectionNode);

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);
