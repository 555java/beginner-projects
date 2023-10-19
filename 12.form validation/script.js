const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
//Show input error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
//Show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check Email
function checkEmail(input) {
  if (input.parentElement.className == "form-control error") {
    return;
  }
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "invalid Email");
  }
}
//Check password
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}
//checkRequired fields
function checkRequired(inputArr) {
  inputArr.forEach((item) => {
    if (item.value.trim() === "") {
      showError(item, `${getFieldName(item)} is required`);
    } else {
      showSuccess(item);
    }
  });
}
//Check length
function checkLength(input, min, max) {
  if (input.value.length > max || input.value.length < min) {
    showError(input, `Length of ${input.id} should be min ${min}, max ${max}`);
  } else {
    showSuccess(input);
  }
}
//Get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, Email, password, password2]);
  checkLength(username, 3, 15);
  checkEmail(Email);
  checkLength(password, 6, 25);
  checkPasswordsMatch(password, password2);
});
//else if variant of checking
//
//
// //Event listeners
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   if (username.value === "") {
//     showError(username, "Username is required");
//   } else {
//     showSuccess(username);
//   }

//   if (Email.value === "") {
//     showError(Email, "Email is required");
//   } else if (isValidEmail(Email.value)) {
//     showSuccess(Email);
//   } else {
//     showError(Email, "Email is not suitable");
//   }

//   if (password.value === "") {
//     showError(password, "password is required");
//   } else {
//     showSuccess(password);
//   }
// });
