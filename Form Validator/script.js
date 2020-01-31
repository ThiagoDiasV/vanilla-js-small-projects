const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
  }

  function showSucess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  }

  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    username.parentElement.classList.add("success");
  }
});
