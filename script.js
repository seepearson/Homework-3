// Assignment Code
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
  var length = 10;
  var allowedCharacters = ""
  var password = ""


  var lower = confirm("Would you like to use lowercase letters");
  if (lower === true) {
    allowedCharacters += "abcdefghijklmnopqrstuvwxyz"

  }
  var upper = confirm("Would you like to use upperrcase letters");
  if (upper === true) {
    allowedCharacters += "abcdefghijklmnopqrstuvwxyz".toUpperCase()

  }
  for (var i = 0; i < length; i++) {
    password += allowedCharacters[0]
  }
  return password




}


// //promts for password length
// function buttonclicked(){
// var pwlength = prompt("how long would you like your password? choose between 8-128 characters");
// if(pwlength < 8 || pwlength > 128) {
//   alert("please choose between 8-128");
//   return buttonclicked();
// }