const userName = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

userName.addEventListener("input", sayHello);

function sayHello(evt) {
  if (evt.currentTarget.value.trim() === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = evt.currentTarget.value.trim();
  }
}
