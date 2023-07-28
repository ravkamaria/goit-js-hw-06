const input = document.querySelector("#validation-input");
input.addEventListener("blur", countLength);

function countLength(evt) {
  let inputValue = evt.currentTarget.value.trim();
  if (inputValue.length === Number(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
