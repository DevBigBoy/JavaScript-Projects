let nums = document.querySelectorAll(".box .num");
let section = document.querySelector(".work");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((e) => startCount(e));
    }
    started = true;
  }
};

function startCount(e) {
  let goal = e.dataset.goal;
  let count = setInterval(() => {
    e.textContent++;
    if (e.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
