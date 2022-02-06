const count = document.getElementById("count");

const btn = document.querySelectorAll("button");

btn.forEach(function (e) {
  e.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
      count.innerHTML++;
      setColor();
    } else if (e.target.classList.contains("subtract")) {
      count.innerHTML--;
      setColor();
    } else if (e.target.classList.contains("reset")) {
      count.innerHTML = 0;
      setColor();
    }
  });
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "red";
  } else if (count.innerHTML < 0) {
    count.style.color = "green";
  } else {
    count.style.color = "blue";
  }
}
