const number = document.querySelector(".number");
const btn = document.querySelector(".btn");

let generatNumber = () => {
  const randomN = Math.floor(Math.random() * 10);
  number.innerHTML = randomN;
};

btn.addEventListener("click", generatNumber);
