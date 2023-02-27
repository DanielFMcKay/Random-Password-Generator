// Assignment code here


const characterTypeSelect = function() {

  // Uppercase character confirmation and displayed validation of choice
  var upperCase = confirm("Do you want to include uppercase characters in your password?");

  if (!upperCase) {
    upperCase = "";
    // display of choice and prompt to continue. I considered "Click OK to continue" redundant after the first time.
    window.alert("You have selected not to include uppercase characters. Click OK to continue.");
    
    // I had initially decided to make it an option to stop the password creation process at any time,
    // but it became too confusing in testing, so that code has all been removed, except the example below
    // which has been commented out for display purposes.

    // if (!noUpperCaseContinue) {
      // return;
      // } 
    } else {
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    window.alert("You have selected to include uppercase characters. Click OK to continue.");
    
  
  }
  
  // lowercase character confirmation and displayed validation of choice
  var lowerCase = confirm('Do you want to include lowercase characters?');

  if (!lowerCase) {
    lowerCase = "";
    window.alert("You have selected not to include lowercase characters.");
  } else {
    lowerCase = "abcdefghijklmnopqrstuvwxyz";
    window.alert("You have selected to include lowercase characters.");
    }
  


  // numerals confirmation
  var numerals = confirm('Do you want to include numbers?');
  if (!numerals) {
    numerals = "";
    window.alert("You have selected not to include numbers."); 
  } else {
    numerals = "1234567890";
    window.alert("You have selected to include numbers.");
  }

  // special characters confirmation
  var specialCharacters = confirm("Do you want to include special characters?");

  if (!specialCharacters) {
    specialCharacters = "";
    window.alert("You have selected not to include special characters."); 
  } else {
    specialCharacters = "~!@#$%^&*_-={}[];?,.'";
    window.alert("You have selected to include special characters.");
  }

  // this compiles the total possible characters to choose from for the password
  var allPossibleCharacters = upperCase + lowerCase + numerals + specialCharacters;
  
  // confirms that at least one character type has been selected by the user
  if (allPossibleCharacters.length > 0) {
    console.log("All characters available: " + allPossibleCharacters);
    return allPossibleCharacters;
  } else {
    window.alert("Please choose at least one type of character.");
    return characterTypeSelect();
  }
}

var createPassword = function() {
  // prompt to begin
  var startPassword = confirm("Please create a password based on the following criteria.\nClick OK to continue.");
//  I know this part seems redundant, but one seems to get caught in a recursive loop under certain circumstances if not included
  if (!startPassword) {
    return;
  }

  // setting character length
  var passLength = prompt("Please enter the desired length of your password.\nIt must be between 8 and 128 characters.");
  passLength = parseInt(passLength);
  console.log('Password length is ' + passLength);
  
  // returns to first prompt if something other than a number between 8 and 128 has been input
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    window.alert("Please choose a number between 8 and 128.");
    return createPassword();
  } else {
  // Displays password length selected. You can also exit and restart the creation process at this point by clicking Cancel.
    var passLengthDisplay = confirm(`You have selected a password ${passLength} characters long.`);
  }
    if (!passLengthDisplay) {
      return;
    }
  

  // generates password based on selected criteria
  var characterSet = characterTypeSelect();
  var generatedPassword = "";
  
  for (var i = 0, n = characterSet.length; i < passLength; i++) {
    generatedPassword += characterSet[Math.floor(Math.random() * n)];
  }
  console.log("the password is" + generatedPassword);
  
  return generatedPassword;
}

// Get references to the #generate element
var generateButton = document.getElementById("generate")

// Add a password to the #password input
function displayPassword() {
  var password = createPassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;
}

// Add event listener to generate button
generateButton.addEventListener("click", displayPassword);

// copy password to clipboard
function copyFunction() {
  // Get the text field
  var copyText = document.getElementById("password");

  // Select the text field
  copyText.select();

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

// var copyButton = document.getElementById("copy");

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
// "execCommaand" seems to be both deprecated and without a simple replacement.
  document.execCommand("copy");
}
