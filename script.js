// Assignment Code
var generateBtn = document.querySelector("#generate");
var criteriaBtn = document.querySelector("#criteria");

// Password criteria
var pwc = {
  selected: "",
  letters: "abcdefghijklmnopqrstuvwxyz",
  numeric: "013456789",
  special: "!@#$%&*",
  length: 8
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to buttons
generateBtn.addEventListener("click", writePassword);
criteriaBtn.addEventListener("click", showCriteria);

// user clicks button, presented w series of prompts for password criteria
//show or hide criteria card
function showCriteria() {
  var criteriaDisplay = document.querySelector(".criteria-box");
  if (criteriaDisplay.classList.contains("hidden")) {
    criteriaDisplay.classList.remove("hidden");
    criteriaDisplay.classList.add("shown");
  } else {
    criteriaDisplay.classList.remove("shown");
    criteriaDisplay.classList.add("hidden");
  }
}

//criteria validity check
//length criteria requirements
var lengthInput = document.querySelector("#length");
lengthInput.addEventListener("change", updateLength);
function updateLength() {
  if (lengthInput.value <8 ) {
    //alert ("Please insert a number between 8 to 128");
    lengthInput.value = 8
  } else if (lengthInput.value >128 ) {
    //alert ("Please insert a number between 8 to 128");
    lengthInput.value = 128;
  }
  pwc.length = lengthInput.value;
  console.log(pwc.length);
}

function generatePassword() {
  // reset selected
  pwc.selected = "";

  // obtain user criteria
  var lowercaseInput = document.querySelector("#lowercase")
  var uppercaseInput = document.querySelector("#uppercase")
  var numbersInput = document.querySelector("#numbers")
  var specialInput = document.querySelector("#special")

  // adds user criteria to selected array
  if (lowercaseInput.checked == true) {
    pwc.selected = pwc.selected.concat(pwc.letters);
  }
  if (uppercaseInput.checked == true) {
    pwc.selected = pwc.selected.concat(pwc.letters.toUpperCase());
  }
  if (numbersInput.checked == true) {
    pwc.selected = pwc.selected.concat(pwc.numeric);
  }
  if (specialInput.checked == true) {
    pwc.selected = pwc.selected.concat(pwc.special);
  }
  console.log(pwc.selected)
}

// at least one character type should be selected

// Randomly generated password meeting creiteria

// When all prompts are answered, generate password matching selected critera
// Displayed as an alert or written to the page

