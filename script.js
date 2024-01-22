// Assignment Code
var generateBtn = document.querySelector("#generate"); 

// Declare lowercase, uppercase, number and symbol arrays:
var lowerCase = ["a", "b", "c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "~", "`", "{", "}", "[", "]", "|", "", ":", ";", "(\)", "?", "<", ">"]; 

// Declare variables for all the prompts:
var promptLength;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmChar;
var choices = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Created a function for generatePassword as it is called in function writePassword
function generatePassword() {
promptLength = prompt("How many characters would you like in your password? Please enter a number between 8 and 128.");

// If user chooses to cancel operation
if (promptLength == null || promptLength == "null" || promptLength == "") {
  return;
}

// Covers the conditions of the number being less than 8 or greater than 128, and if the number is between 8 and 128
if (promptLength < 8 || promptLength > 128) {
  alert("Try again. Please enter a number between 8 and 128.");
  console.log("Password length", promptLength)
} else {
  console.log("Password length", promptLength);
  confirmLowercase = confirm("Would you like to include lowercase in your password?");
  console.log("Lowercase:", confirmLowercase);
  confirmUppercase = confirm("Would you like to include uppercase in your password?");
  console.log("Uppercase:", confirmUppercase);
  confirmNumber = confirm("Would you like to include numbers in your password?");
  console.log("Number:", confirmNumber);
  confirmChar = confirm("Would you like to include special characters in your password?");
  console.log("Symbol:", confirmChar);
}

// If all 4 return false:
if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmChar) {
  choices = alert("You must pick at least one criteria. Please try again.");

// If all 4 return true:

} else if (confirmLowercase && confirmUppercase && confirmNumber && confirmChar) {
  choices = lowerCase.concat(upperCase, number, symbol);
  console.log(choices);

// If 3 out of 4 are true:   

} else if (confirmLowercase && confirmUppercase && confirmNumber) {
  choices = lowerCase.concat(upperCase, number);
  console.log(choices);

} else if (confirmLowercase && confirmUppercase && confirmChar) {
  choices = lowerCase.concat(upperCase, symbol);
  console.log(choices);

} else if (confirmUppercase && confirmNumber && confirmChar) {
  choices = upperCase.contact(number, symbol);
  console.log(choices);

} else if (confirmLowercase && confirmNumber && confirmChar) {
  choices = lowerCase.concat(number, symbol);
  console.log(choices);

// If 2 out of 4 are true:

} else if (confirmLowercase && confirmUppercase) {
  choices = lowerCase.concat(upperCase);
  console.log(choices);

} else if (confirmLowercase && confirmNumber) {
  choices = lowerCase.concat(number);
  console.log(choices);

} else if (confirmLowercase && confirmChar) {
  choices = lowerCase.concat(symbol);
  console.log(choices);

} else if (confirmUppercase && confirmNumber) {
  choices = upperCase.concat(number);
  console.log(choices);

} else if (confirmUppercase && confirmChar) {
  choices = upperCase.concat(symbol);
  console.log(choices);

} else if (confirmNumber && confirmChar) {
  choices = number.concat(symbol);
  console.log(choices);

// If only 1 is true:

} else if (confirmLowercase) {
  choices = lowerCase;
  console.log(choices);

} else if (confirmUppercase) {
  choices = upperCase;
  console.log(choices);

} else if (confirmNumber) {
  choices = number;
  console.log(choices);

} else if (confirmChar) {
  choices = symbol;
  console.log(choices);

}

// Create a new variable and make it an array
var newPassword = [];

// For loop so it can randomly select different elements in the various array choices
for (i = 0; i < promptLength; i++) {
  // [Math.floor(Math.random() * choices.length] was found from: https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/
  var allChoices = choices[Math.floor(Math.random() * choices.length)];
  newPassword.push(allChoices);
  console.log(allChoices);
}

// Convert array to string was found from: https://www.geeksforgeeks.org/javascript-array-join-method/
var password = newPassword.join("");
console.log("Your password is:", password);
return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);