const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show error messages and border
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  // input.nextElementSibling.innerHTML = message;
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success border
function showSuccess(input) {
  input.parentElement.className = "form-control success";
}

// Validate email
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, `${getFieldName(input)} is not valid`);
  }
}

// Get fieldname
function getFieldName(input) {
  return `${input.id.charAt(0).toUpperCase()}${input.id.slice(1)}`;
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(element) {
    if (element.value.trim() === "") {
      showError(element, `${getFieldName(element)} is required.`);
    } else {
      showSuccess(element);
    }
  });
}

// Check length of username and password
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  }
}

// Check if two passwords matches
function matchTwoPasswords(pass1, pass2) {
  if (pass1.value !== pass2.value) {
    showError(pass, "Passwords don't match");
  }
}

// Event listener
form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 20);
  checkLength(password, 6, 25);
  checkEmail(email);
  matchTwoPasswords(password, password2);
});
