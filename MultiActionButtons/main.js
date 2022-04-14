// Enable all  menu buttons
document.querySelectorAll(".mab").forEach((multiAction) => {
  const meunButton = multiAction.querySelector(".mab__button--menu");
  const list = multiAction.querySelector(".mab__list");

  meunButton.addEventListener("click", () => {
    list.classList.toggle("active");
  });
});

//  hide all lists when clicking elsewhere on the page

document.addEventListener("click", (e) => {
  const keepOpen =
    e.target.matches(".mab__list") ||
    e.target.matches(".mab__button--menu") ||
    e.target.matches(".mab__button--icon");

  if (keepOpen) return;

  document.querySelectorAll(".mab__list").forEach((list) => {
    list.classList.remove("active");
  });
});
