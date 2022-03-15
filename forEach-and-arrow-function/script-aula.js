<<<<<<< HEAD
// const imgs = document.querySelectorAll("img");

//  imgs.forEach(function (item, index, array) {
//    console.log(item, index, array);
//  });

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
  console.log(item);
});

const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

imgs.forEach((item) => console.log(item));
=======
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
>>>>>>> 707e8bee44b68bcfb498b6e1dc7f709a60128535
