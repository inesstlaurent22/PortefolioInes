const buttons = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    colorBox.style.background = button.dataset.color;
    overlay.classList.add("active");
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  buttons.forEach(b => b.classList.remove("active"));
});
