export default function initDate() {}

const open = document.querySelector("[data-semana]");
const daysWeek = open.dataset.semana.split(",").map(Number);
const hourWeek = open.dataset.horario.split(",").map(Number);

const dateNow = new Date();
const dayOfWeek = dateNow.getDay();
const hourNow = dateNow.getHours();

const openToday = daysWeek.indexOf(dayOfWeek) !== -1;

const openHour = hourNow >= hourWeek[0] && hourNow < hourWeek[1];

if (openToday && openHour) {
  open.classList.add("aberto");
}
