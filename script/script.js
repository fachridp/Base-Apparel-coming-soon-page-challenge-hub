const inputField = document.querySelector(".input-field");
const wrapButton = document.getElementById("wrap-button");
const invalidEmail = document.querySelector(".invalid-email");
const emptyEmail = document.querySelector(".empty-email");
const errorSign = document.querySelector(".wrap-error-sign");

// Global Variables
let ruleSpecialChar;
let inputValue;
let inputValueLength;

function preventSpecialChar() {
  ruleSpecialChar = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
  inputValue = inputField.value;
  inputValueLength = inputValue.charAt(inputValue.length - 1);

  if (inputValue.match(ruleSpecialChar)) {
    inputField.style.border = "2px solid #ff3838";
    invalidEmail.style.display = "block";
    emptyEmail.style.display = "none";
    errorSign.style.display = "block";
  } else {
    inputField.style.border = "2px solid #ff3838";
  }
}

function preventEmptyEmail() {
  preventSpecialChar();

  if (inputValue == "") {
    inputField.style.border = "2px solid #ff3838";
    invalidEmail.style.display = "none";
    emptyEmail.style.display = "block";
    errorSign.style.display = "block";
  }
}

function checkLengthEmail() {
  if (inputValue.length > 0 && !inputValue.match(ruleSpecialChar)) {
    inputField.style.border = "1px solid #ce9797";
    invalidEmail.style.display = "none";
    emptyEmail.style.display = "none";
    errorSign.style.display = "none";
  }
}

function success() {
  if (!inputValue.match(ruleSpecialChar) && inputValue.length > 0) {
    inputField.style.border = "2px solid #42ba96";
  }
}

wrapButton.addEventListener("click", function (e) {
  preventSpecialChar();
  preventEmptyEmail();
  checkLengthEmail();
  success();
});
