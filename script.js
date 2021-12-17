// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialCharacters = ["\!", "\"", "\#", "\$", "\%", "\&", "\'", "\(", "\)", "\*", "\+", "\,", "\-", "\.", "\/", "\:", "\;", "\<", "\=", "\>", "\?", "\@", "\[", "\\", "\]", "\^", "\_", "\`", "\{", "\|", "\}", "\~"];

function generatePassword() {
 var length = parseInt(prompt("How many characters would you like your password to contain?"), 10);

 if(Number.isNaN(length)) {
   alert("Response must be a number.");
   return null;
 }
 if(length < 8 || length > 129) {
   alert("Response must be more than 8 and less than 129.");
   return null;
 }

 var hasLowercase  = confirm("Press OK to include lower case characters.");

 var hasUppercase  = confirm("Press OK to include upper case characters.");

 var hasNumeric  = confirm("Press OK to include numeric characters.");

 var hasSpecialcharacters  = confirm("Press OK to include special characters.");

 if(hasLowercase === false && hasUppercase === false && hasNumeric === false && hasSpecialcharacters === false) {
   alert("You must include at least one character type.");
   return null;
 } 

 // Object to save user input
var passwordOption = {
length: length;
hasLowercase: hasLowercase;
hasUppercase: hasUppercase;
hasNumeric: hasNumeric;
hasSpecialcharacters: hasSpecialcharacters;
};
return passwordOption;


function randomOutput(#arr)
}

generatePassword();



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
