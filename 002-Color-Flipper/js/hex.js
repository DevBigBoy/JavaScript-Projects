//* Hex App
const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btnHex = document.getElementById("btn");
let color = document.querySelector(".color");

btnHex.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexColors[getHexColor()];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getHexColor() {
  return Math.floor(Math.random() * hexColors.length);
}
