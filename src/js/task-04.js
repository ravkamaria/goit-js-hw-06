const span = document.querySelector("#value");
let counterValue = 0;

const btnMinus = span.previousElementSibling;
const btnPlus = span.nextElementSibling;

btnMinus.addEventListener("click", makeDecrement);
btnPlus.addEventListener("click", makeIncrement)

function makeDecrement(){
    counterValue -= 1;
    span.textContent = counterValue;
}

function makeIncrement(){
    counterValue += 1;
    span.textContent = counterValue;
}
