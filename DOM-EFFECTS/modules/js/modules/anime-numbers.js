export default function initAnimeNumbers() {}

const numbers = document.querySelectorAll("[data-numero]");

numbers.forEach((number) => {
  const total = +number.innerText;
  const increment = Math.floor(total / 100);
  let start = 0;
  const timer = setInterval(() => {
    start = start + increment;
    number.innerText = start;
    if (start > total) {
      number.innerText = total;
      clearInterval(timer);
    }
  }, 25 * Math.random());
});

function handleMutation() {}

const observerTarget = document.querySelector(".numeros");
const observer = new MutationObserver(handleMutation);

observer.observe(observerTarget, { attributes: true });
