// Assignment code here


const characterTypeSelect = function() {

  // Uppercase character confirmation and displayed validation of choice
  var upperCase = confirm("Do you want to include uppercase characters in your password?");

  if (!upperCase) {
    upperCase = "";
    // display of choice and prompt to continue. 
    // I considered "Click OK to continue" redundant after the first time.
    window.alert("You have selected not to include uppercase characters. Click OK to continue.");
    } else {
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    window.alert("You have selected to include uppercase characters. Click OK to continue.");
  }
  
  // lowercase character confirmation and displayed validation of choice
  let lowerCase = confirm('Do you want to include lowercase characters?');

  if (!lowerCase) {
    lowerCase = "";
    window.alert("You have selected not to include lowercase characters.");
  } else {
    lowerCase = "abcdefghijklmnopqrstuvwxyz";
    window.alert("You have selected to include lowercase characters.");
    }
  


  // numerals confirmation
  let numerals = confirm('Do you want to include numbers?');
  if (!numerals) {
    numerals = "";
    window.alert("You have selected not to include numbers."); 
  } else {
    numerals = "1234567890";
    window.alert("You have selected to include numbers.");
  }

  // special characters confirmation
  let specialCharacters = confirm("Do you want to include special characters?");

  if (!specialCharacters) {
    specialCharacters = "";
    window.alert("You have selected not to include special characters."); 
  } else {
    specialCharacters = "~!@#$%^&*_-={}[];?,.'";
    window.alert("You have selected to include special characters.");
  }

  // this compiles the total possible characters to choose from for the password
  let allPossibleCharacters = upperCase + lowerCase + numerals + specialCharacters;
  
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
  // exits process and prevents "undefined" from showing
    passwordText.value = "";
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
  // exits process and prevents "undefined" from showing
      passwordText.value = "";
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

// declare the Generate Password button
const generateButton = document.getElementById("generate")

// Put the password in the text field.
function displayPassword() {
  var password = createPassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;
}

// Add event listener to Generate Password button
generateButton.addEventListener("click", displayPassword);

// Function and button for copying password to clipboard
function copyButton() {
  // Get the text field
  var copyText = document.getElementById("password");

  // Select the text field
  copyText.select();

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Confirmation alert that the text has been copied
  window.alert("Your Secure Password has been copied successfully!");
}

function clearField() {
document.getElementById("password").value = "";
return;
}

