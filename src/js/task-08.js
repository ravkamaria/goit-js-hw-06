const form = document.querySelector(".login-form");

form.addEventListener("submit", submitData);

function submitData(evt) {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;
  if (email.value === "" || password.value === "") {
    window.alert("Please, fill in all the fields");
  } else {
    const userData = {
      email: email.value,
      password: password.value,
    };
    console.log(userData);
    form.reset();
  }
}
