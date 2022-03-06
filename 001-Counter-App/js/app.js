//* Set initial vfalue to Zero
let count = 0;
//* select value and buttons
const value = document.getElementById("value");
const btn = document.querySelectorAll("button");

btn.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    changeColor();
    value.textContent = count;
  });
});

function changeColor() {
  if (count > 0) {
    value.style.color = "green";
  } else if (count < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "#222";
  }
}
