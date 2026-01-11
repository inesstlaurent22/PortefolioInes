const const blocs = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");

blocs.forEach(bloc => {
  bloc.addEventListener("click", () => {

    blocs.forEach(b => b.classList.remove("active"));
    bloc.classList.add("active");

    const color = bloc.dataset.color;
    colorBox.style.background = color;

    overlay.classList.add("active");
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  blocs.forEach(b => b.classList.remove("active"));
});
