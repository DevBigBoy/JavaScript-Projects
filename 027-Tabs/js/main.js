const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach((b) => {
      b.classList.remove("active");
    });
    e.target.classList.add("active");

    // hide other articles
    articles.forEach((a) => {
      a.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
