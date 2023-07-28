const text = document.querySelector("#text");
const input = document.querySelector("#font-size-control");

input.addEventListener("input", changerFontSize);

function changerFontSize(evt) {
  text.style.fontSize = `${evt.currentTarget.value}px`;
}
