const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const year = document.getElementById("year");
const countdown = document.getElementById("countdown");
const loading = document.getElementById("loading");

let currentYear = new Date().getFullYear();
// console.log(currentYear);

let nextYear = currentYear + 1;

year.innerHTML = nextYear;

let newYearTime = new Date(`January 01 ${nextYear} 00:00:00 `);
// console.log(newYearTime);

function updateCountdown() {
  let currentTime = new Date();
  let future = newYearTime - currentTime;

  let d = Math.floor(future / 1000 / 60 / 60 / 24);
  let h = Math.floor(future / 1000 / 60 / 60);
  let m = Math.floor(future / 1000 / 60);
  let s = Math.floor(future / 1000);

  days.innerHTML = d < 10 ? "0" + d : d;
  hours.innerHTML = h < 10 ? "0" + h : d;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(updateCountdown, 1000);

setTimeout(() => {
 loading.remove();
 countdown.style.display = "flex";
}, 1000);
