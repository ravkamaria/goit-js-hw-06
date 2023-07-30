function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const page = document.querySelector("body");

btn.addEventListener("click", colorizer);

function colorizer() {
  page.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
}
