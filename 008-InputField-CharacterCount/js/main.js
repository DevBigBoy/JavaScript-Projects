let count = document.querySelector(".count");
let input = document.querySelector(".testarea");
let deletex = document.querySelector(".delete");

input.addEventListener("keyup", () => {
  count.innerHTML = input.value.length;
});

deletex.addEventListener("click", function () {
  input.value = "";
  count.innerHTML = 0;
});
