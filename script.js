// Assignment Code
var generateBtn = document.querySelector("#generate");
var criteriaBtn = document.querySelector("#criteria");

// Password criteria
var pwc = {
  selected: "",
  letters: "abcdefghijklmnopqrstuvwxyz",
  numeric: "013456789",
  special: "!@#$%&*",
  length: "8",
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to buttons
generateBtn.addEventListener("click", writePassword);
// TODO: criteriaBtn.addEventListener("click", );


// When user clicks button, they are presented with a series of prompts for password criteria



// Randomly generated password meeting creiteria
// When user clicks button they are presented with a series of prompts for password critera

// User selects crtieria to include in the password

// Input should be validated and at least one character type should be selected
// When all prompts are answered, generator a password matching selected critera
// Displayed as an alert or written to the page

