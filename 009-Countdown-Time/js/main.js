// Get Variable
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// Get NewYear Date
const getYear = new Date();
const newYears = `1 Jan ${getYear.getFullYear() + 1}`;

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentData = new Date();
  const totalSeconds = (newYearsDate - currentData) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const Hours = Math.floor((totalSeconds / 3600) % 24);
  const mins = Math.floor(Math.floor(totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);
  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(Hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
// initial Call
countdown();

setInterval(countdown, 1000);
