const div = document.querySelector("div");

div.dataset.height = 1000;

delete div.dataset.width;

console.log(div.dataset);
