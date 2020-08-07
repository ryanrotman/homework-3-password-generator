// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLowerCase = "abcdefghijklmnopqrstuvwxyz"
var pwUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var pwNumbers = "0123456789"
var pwSpecialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

// Write password to the #password input
function writePassword() {
  // User prompts for password criteria
  var passwordCriteria = confirm("Press \"Ok\" to view the criteria for generating your password.");
  console.log("Password Criteria " + passwordCriteria);
  var passwordLength = prompt("What would you like the length of your password to be? Please enter a number between 8 and 128.");
  // NEED TO FIGURE OUT HOW TO WRITE THE CODE TO STOP THE PROMPTS IF THE USER DOESN'T INPUT THE RIGHT LENGTH
    // while (passwordLength <8 || passwordLength >128) {
    //   prompt("Please enter a number between 8 and 128.")
  console.log("Password Length: " + passwordLength);
  var includeLowerCase = confirm("Would you like to include lower case letters in your password?");
  console.log("Include lower case: " + includeLowerCase);
  var includeUpperCase = confirm("Would you like to include upper case letters in your password?");
  console.log("Include upper case: " + includeUpperCase);
  var includeNumbers = confirm("Would you like to include numbers in your password?");
  console.log("Include numbers: " + includeNumbers);
  var includeSpecialCharacters = confirm("Would you like to include special characters in your password?");
  console.log("Include special characters: " + includeSpecialCharacters);
  
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);