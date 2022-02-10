const button = document.querySelector("#button");
const modal = document.querySelector(".popup-box");
const closeButton = document.querySelector(".close-button");

function togglecontainer() {
    modal.classList.toggle("active");
}
function windowOnClick(event) {
  if (event.target === modal) {
    togglecontainer();
  }
}
button.addEventListener("click", togglecontainer);
closeButton.addEventListener("click", togglecontainer);
window.addEventListener("click", windowOnClick);
