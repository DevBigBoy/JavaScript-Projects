let up = document.getElementById("up");

window.onscroll = function () {
  if (this.scrollY >= 1000) {
    up.classList.add("show");
  } else {
    up.classList.remove("show");
  }
};

up.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
