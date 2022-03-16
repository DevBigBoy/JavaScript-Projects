let title = document.querySelector(".title"),
  list = document.querySelector(".list"),
  btn = document.querySelector(".button");

window.onload = function () {
  if (window.navigator.onLine) {
    onLine();
  } else {
   
  }
};


btn.addEventListener("click", () => location.reload());

function onLine() {
  title.innerHTML = "OnLine Now";
  title.style.color = "var(--clr-green-text)";
  title.style.marginBottom = 0;
  document.body.style.backgroundColor = "var(--clr-green)";
  list.classList.add("hide");
  btn.classList.add("hide");
}
