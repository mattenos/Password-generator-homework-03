// 1 Word/character bank

// 2 generatePassword function

//  2a conditionals

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
   
    var hasSymbols  = confirm("Press OK to include special characters.");
   
    if(hasLowercase === false && hasUppercase === false && hasNumeric === false && hasSymbols === false) {
      alert("You must include at least one character type.");
      return null;
    } 

var randomFunction = {
    hasLowercase: getRandomLower,
    hasUppercase: getRandomUpper,
    hasNummeric: getRandomNumeric,
    hasSymbol: getRandomSymbol
};




// Generators

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 96);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 64);
}

function getRandomNumeric() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    var symbols = "!@#$%^&*(){}[]+<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomUpper())