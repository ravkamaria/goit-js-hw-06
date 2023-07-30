function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxContainer = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);

function createBoxes(amount) {
  const allBoxes = [];
  if (1 <= input.valueAsNumber && input.valueAsNumber <= 100) {
    amount = input.valueAsNumber;
  }
  let sizeFirstBox = 30;
  for (let i = 1; i <= amount; i++) {
    sizeFirstBox += 10;
    const color = getRandomHexColor();
    const box = `<div class="box" style=" width: ${sizeFirstBox}px; height: ${sizeFirstBox}px; background-color: ${color};"></div>`;
    allBoxes.push(box);
  }

  boxContainer.insertAdjacentHTML("beforeend", allBoxes.join(""));
  return boxContainer;
}

btnDestroy.addEventListener("click", remover);

function remover() {
  boxContainer.innerHTML = "";
  input.value = "";
}
