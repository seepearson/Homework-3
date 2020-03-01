const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountRange.value = value
  characterAmountNumber.value = value
}

/// Assignment Code
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
  var length = syncCharacterAmount;
  //Make length configurable
  var allowedCharacters = ""
  var password = ""

// Lowercase
  var lower = confirm("Would you like to use lowercase letters?");
  if (lower === true) {
    allowedCharacters += "abcdefghijklmnopqrstuvwxyz"

  }
  // Uppercase
  var upper = confirm("Would you like to use uppercase letters?");
  if (upper === true) {
    allowedCharacters += "abcdefghijklmnopqrstuvwxyz".toUpperCase()

  }

  //add special characters
  var specialCharacters = confirm("Would you like to use Special Characters?");
  if (specialCharacters === true) {
    allowedCharacters += "!@#$%^&*()[]{}+=<>,./"
  }

  //add numbers
  var numbers= confirm("Would you like to use numbers?");
  if (numbers === true) {
    allowedCharacters += "1234567890"
  }

  for (var i = 0; i < length; i++) {
    //Make 0 into random
    password += allowedCharacters[0]
  }
  return password




}
