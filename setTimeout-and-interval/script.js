// Mude a cor da tela para azul e depois para vermelho a cada 2s.
function changeClass() {
  document.body.classList.toggle("active");
}

setInterval(changeClass, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const start = document.querySelector(".iniciar");
const stop = document.querySelector(".pausar");
const time = document.querySelector(".tempo");

start.addEventListener("click", initTime);
stop.addEventListener("click", stoptTime);
stop.addEventListener("dblclick", resetTime);

let i = 0;
let timer;

function initTime() {
  timer = setInterval(() => {
    time.innerText = i++;
  }, 100);
  start.setAttribute("disabled", "");
}

function stoptTime() {
  clearInterval(timer);
  start.removeAttribute("disabled", "");
}

function resetTime() {
  tempo.innerText = 0;
  i = 0;
}
