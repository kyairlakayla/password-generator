
// Assignment code here
var passwordLength;
var includeLowercase;
var includeUppercase;
var includeNumbers;
var includeSymbols;
var userChoices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


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


function generatePassword() {
  passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  
  if(!passwordLength) {
    alert("Required value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
  
  } else { 
    includeLowercase = confirm("Include lower case letters?");
    includeUppercase = confirm("Include upper case letters?");
    includeNumbers = confirm("Include numbers?");
    includeSymbols = confirm("Include special characters?");

  };

  // No answer then
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
    userChoices = alert("You must choose a criteria");
  // 4 true options
  } else if (includeLowercase && includeUppercase && includeNumbers && includeSymbols) {
    userChoices = lowerCase.concat(upperCase, numbers, symbols);
    console.log(userChoices);
  }
  // 3 true options
  else if (includeLowercase && includeUppercase && includeNumbers) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }
  else if (includeLowercase && includeUppercase && includeSymbols) {
    userChoices = lowerCase.concat(upperCase, symbols);
    console.log(userChoices);
  }
  else if (includeLowercase && includeNumbers && includeSymbols) {
    userChoices = lowerCase.concat(numbers, symbols);
    console.log(userChoices);
  }
  else if (includeUppercase && includeNumbers && includeSymbols) {
    userChoices = upperCase.concat(numbers, symbols);
    console.log(userChoices);
  }
  // 2 true options
  else if (includeLowercase && includeUppercase) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (includeLowercase && includeNumbers) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if (includeLowercase && includeSymbols) {
    userChoices = lowerCase.concat(symbols);
    console.log(userChoices);
  }
  else if (includeUppercase && includeNumbers) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if (includeUppercase && includeSymbols) {
    userChoices = upperCase.concat(symbols);
    console.log(userChoices);
  }
  else if (includeNumbers && includeSymbols) {
    userChoices = numbers.concat(symbols);
    console.log(userChoices);
  }
  // 1 true option
  else if (includeLowercase) {
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if (includeUppercase) {
    userChoices = upperCase;
    console.log(userChoices);
  }
  else if (includeNumbers) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (includeSymbols) {
    userChoices = symbols;
    console.log(userChoices);
  };

  var passwordBlank = [];

  // Loop for random selection
  for (var i = 0; i < passwordLength; i++) {
  var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)]
  passwordBlank.push(allChoices);
  
}
var password = passwordBlank.join("");
return password;
}; 
 