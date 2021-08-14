// assigning elements to global variables
var generateBtn = document.querySelector("#generate");
var criteriaBtn = document.querySelector("#criteria");
var lengthInput = document.querySelector("#length");
var passwordText = document.querySelector("#password");

// obtain user criteria
var lowercaseInput = document.querySelector("#lowercase")
var uppercaseInput = document.querySelector("#uppercase")
var numbersInput = document.querySelector("#numbers")
var specialInput = document.querySelector("#special")

// Password criteria options & defaults
var pwc = {
  letters: "abcdefghijklmnopqrstuvwxyz",
  numeric: "013456789",
  special: "!@#$%&*",
  length: 8
};

// randomize password and return to writePassword
function generatePassword() {
  var randomPassword = "";
  var selected = "";

  // adds user criteria to selected array
  if (lowercaseInput.checked == true) {
    selected = selected.concat(pwc.letters);
  }
  if (uppercaseInput.checked == true) {
    selected = selected.concat(pwc.letters.toUpperCase());
  }
  if (numbersInput.checked == true) {
    selected = selected.concat(pwc.numeric);
  }
  if (specialInput.checked == true) {
    selected = selected.concat(pwc.special);
  }

  // generate password matching length
  for (var i=0; i < pwc.length; i++) {
    var randChar = randomGen(selected);
    randomPassword = randomPassword.concat(randChar);
  }
  return randomPassword;
} 

// checks if user has selected any criteria
function hasCriteria() {
  return (lowercaseInput.checked || uppercaseInput.checked || numbersInput.checked || specialInput.checked);
}

// validity check
function isPasswordValid(charCheck) {
  var stringIncLowers = true;
  var stringIncUppers = true;
  var stringIncNumbers = true;
  var stringIncSpecials = true;

  if (lowercaseInput.checked) {
    var mustContainOne = pwc.letters.split("");
    stringIncLowers = mustContainOne.some(c => charCheck.includes(c));
    console.log("Lowercase: " + stringIncLowers);
  }
  if (uppercaseInput.checked) {
    var mustContainOne = pwc.letters.toUpperCase().split("");
    stringIncUppers = mustContainOne.some(c => charCheck.includes(c));
    console.log("Uppercase: " + stringIncUppers);
  }
  if (numbersInput.checked) {
    var mustContainOne = pwc.numeric.split("");
    stringIncNumbers = mustContainOne.some(c => charCheck.includes(c));
    console.log("Numbers: " + stringIncNumbers);
  }
  if (specialInput.checked) {
    var mustContainOne = pwc.special.split("");
    stringIncSpecials = mustContainOne.some(c => charCheck.includes(c));
    console.log("Specials: " + stringIncSpecials);
  }
  // if all of these are true, return true
  return (stringIncLowers && stringIncUppers && stringIncNumbers && stringIncSpecials);
} 

//Random number gen
function randomGen(optionList) {
  //random integer from 1 - amt of options available
  var randIdx = Math.floor(Math.random() * optionList.length);
  var random = optionList[randIdx];
  return random;
}

// user presented with series of prompts for password criteria
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

//length criteria requirements
function updateLength() {
  if (lengthInput.value <8 ) {
    lengthInput.value = 8
  } else if (lengthInput.value >128 ) {
    lengthInput.value = 128;
  }
  pwc.length = lengthInput.value;
  console.log(pwc.length);
}

// Write password to the #password input
function writePassword() {
  //when no criteria is set
  //== true is implied
  if (hasCriteria()) {
    var foundPassword = false;
    var password = "";
    while (!foundPassword) {
      // make a new password
      password = generatePassword();
      // check password matches selected criteria
      foundPassword = isPasswordValid(password);
      console.log("Generating Password");
    }
    passwordText.value = password;
    console.log("Generated Password:" + password);
    console.log(foundPassword);
  } else {
    passwordText.value = "You need to select criteria before you can generate a password.";
  }
}

// Add event listener to buttons
generateBtn.addEventListener("click", writePassword);
criteriaBtn.addEventListener("click", showCriteria);
lengthInput.addEventListener("change", updateLength);


  