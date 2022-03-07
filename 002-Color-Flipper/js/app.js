//* Simple App

let btn = document.getElementById("btn");
let btnHex = document.getElementById("btn-hex");
let color = document.querySelector(".color");

const simpleColors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "hotpink",
];
const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", function () {
  const randomNumer = getRandomNumber();
  document.body.style.backgroundColor = simpleColors[randomNumer];
  color.textContent = simpleColors[randomNumer];
});
function getRandomNumber() {
  return Math.floor(Math.random() * simpleColors.length);
}

