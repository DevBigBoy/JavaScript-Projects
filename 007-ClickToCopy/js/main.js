let copyText = document.querySelector(".copy-text");
let btn = document.querySelector(".btn");
let text = document.querySelector(".text");

btn.addEventListener("click", function () {
  text.select();
  document.execCommand("copy");
  copyText.classList.add("active");
  setTimeout(() => {
    copyText.classList.remove("active");
  }, 3000);
});
