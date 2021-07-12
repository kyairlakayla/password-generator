
// Assignment code here
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@$#*&%()+?/=-~'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  passwordLength = prompt("Choose password length. Password must be between 8 and 128 characters!");
  includeLowercase = confirm("Include lowercase letters?");
  includeUppercase = confirm("Include uppercase letters?");
  includeNumbers = confirm("Include numbers?");
  includeSymbols = confirm("Include special characters?");


var password = getRandomLower+ getRandomUpper + getRandomNumber + getRandomSymbol
return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




var passwordLength;
var includeLowercase;
var includeUppercase;
var includeNumbers;
var includeSymbols;