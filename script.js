// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLowerCase = "abcdefghijklmnopqrstuvwxyz"
var pwUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var pwNumbers = "0123456789"
var pwSpecialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var passwordCharacterOptions = ""
var userPassword = ""

// Write password to the #password input
function writePassword() {
  // User prompts for password criteria
  var passwordCriteria = confirm("Press \"Ok\" to view the criteria for generating your password.");
  console.log("Password Criteria: " + passwordCriteria);
  do {var passwordLength = prompt("What would you like the length of your password to be? Please enter a number between 8 and 128.");}
    while (passwordLength <8 || passwordLength >128)
  console.log("Password Length: " + passwordLength);
  var includeLowerCase = confirm("Would you like to include lower case letters in your password?");
  console.log("Include lower case: " + includeLowerCase);
  var includeUpperCase = confirm("Would you like to include upper case letters in your password?");
  console.log("Include upper case: " + includeUpperCase);
  var includeNumbers = confirm("Would you like to include numbers in your password?");
  console.log("Include numbers: " + includeNumbers);
  var includeSpecialCharacters = confirm("Would you like to include special characters in your password?");
  console.log("Include special characters: " + includeSpecialCharacters);

// Generate string which password will be generated from based on user input
function generatePassword () {
  if (includeLowerCase === true) {
    passwordCharacterOptions = passwordCharacterOptions + pwLowerCase;
  } if (includeUpperCase === true) {
    passwordCharacterOptions = passwordCharacterOptions + pwUpperCase;
  } if (includeNumbers === true) {
    passwordCharacterOptions = passwordCharacterOptions + pwNumbers;
  } if (includeSpecialCharacters === true) {
    passwordCharacterOptions = passwordCharacterOptions + pwSpecialCharacters;
  }
}
generatePassword()
console.log("Possible character options: " + passwordCharacterOptions);

// Generate final password chosen at random based on users specified length and character options
for (i = 0; i < passwordLength; i++) {
  userPassword += passwordCharacterOptions.charAt(Math.floor(Math.random() * passwordCharacterOptions.length));
  }
console.log("User Password is: " + userPassword);
return(userPassword);
  
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);