var generateBtn = document.querySelector("#generate");

function generatePassword() {
console.log('Hey, this clicked!');
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

 var hasSymbols  = confirm("Press OK to include special characters.");

 if(hasLowercase === false && hasUppercase === false && hasNumeric === false && hasSymbols === false) {
   alert("You must include at least one character type.");
   return null; 
  }

var userPassword = "";

  for(let i = 0; i < length; i++) {
    let possibleCharacters = [];
    if(hasLowercase) {
      possibleCharacters.push(getRandomLower());
    }
    if(hasUppercase) {
      possibleCharacters.push(getRandomUpper());
    }
    if(hasNumeric) {
      possibleCharacters.push(getRandomNumber());
    }
    if(hasSymbols) {
      possibleCharacters.push(getRandomSymbol());
    }
    console.log(possibleCharacters);
    
// Random position inside an array
 var randomCharacterIndex = Math.floor(Math.random() * possibleCharacters.length)
// Grabbing value at that position
 userPassword += possibleCharacters[randomCharacterIndex]
  }
  
  console.log(userPassword);
  return userPassword;

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 96);
  }
  
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 64);
  }
  
  function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 47);
  }
  
  function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

}




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);




// ---------------------------------------------------------------
// create button to generate password

// generate password function triggers a .prompt for password criteria. The user will select which criteria to include in a generated password.

    // 1 - length; must be between 8 and 129 chars
        // if number not inputed, send back to start
    // 2 - lowercase; .confirm
    // 3 - uppercase; .confirm
    // 4 - symbols; .confirm

    // **atleast one type is required**
        //if none are confirmed, send back to start

// When all prompts are answered, a password is generated that matches the selected criteria.

// When a password is generated, the password is either displayed in an alert or written to the page.