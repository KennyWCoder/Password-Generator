// Assignment Code
var generateBtn = document.querySelector("#generate");

//create var for prompt
var lengthOfCharacters;
var askLowerCase;
var askUpperCase;
var askNumeric;
var askSpecial;
var userChoice;

//create criteria array
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = lowerCase.map(element => {
  return element.toUpperCase();
});
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

//create a function to solve the issue of second try. It will restart the whole thing, instead of letting whatever choice to overwrite the function. eg. second try will put 5 without this function, it will generate 5 characters of length.
function askCriteria() {
  if (!lengthOfCharacters) {
    alert("Second Error, please restart the generation!");
    generatePassword();
  }
  else if (lengthOfCharacters < 8 || lengthOfCharacters > 128) {
    alert("Second Error, please restart the generation!");
    generatePassword();
  } else {
    window.alert("You choose " + lengthOfCharacters + " characters length of password.")
    askLowerCase = window.confirm("Would you like your password to contain lower case letters?");
    askUpperCase = window.confirm("Would you like your password to contain upper case letters?");
    askNumeric = window.confirm("Would you like your password to contain numeric numbers?");
    askSpecial = window.confirm("Would you like your password to contain special characters?");
  }

}

function generatePassword() {
  lengthOfCharacters = window.prompt("How many characters would you like your password to have? \nPlease choose between 8 and 128.");
  if (!lengthOfCharacters) {
    alert("Please enter the length.");
    lengthOfCharacters = window.prompt("How many characters would you like your password to have? \nPlease choose between 8 and 128.");
    askCriteria();
  }
  else if (lengthOfCharacters < 8 || lengthOfCharacters > 128) {
    lengthOfCharacters = window.prompt("Please choose a length between 8 and 128! :)");
    askCriteria();
  } else {
    askCriteria();
  }

  //if no criteria is chosen
  if (!askLowerCase && !askUpperCase && !askNumeric && !askSpecial) {
    alert("You must choose at least one criteria to make your password stronger 🥲 Please restart the process.")
  }//if picked 3 options
  else if (askLowerCase && askUpperCase && askNumeric) {
    userChoice = lowerCase.concat(upperCase, numbers);
    console.log(userChoice);
  } else if (askLowerCase && askUpperCase && askSpecial) {
    userChoice = lowerCase.concat(upperCase, special);
    console.log(userChoice);
  } else if (askLowerCase && askNumeric && askSpecial) {
    userChoice = lowerCase.concat(numbers, special);
    console.log(userChoice);
  } else if (askUpperCase && askNumeric && askSpecial) {
    userChoice = upperCase.concat(numbers, special);
    console.log(userChoice);
  }//if picked 2 options
  else if (askLowerCase && askUpperCase) {
    userChoice = lowerCase.concat(upperCase);
    console.log(userChoice);
  } else if (askLowerCase && askNumeric) {
    userChoice = lowerCase.concat(numbers);
    console.log(userChoice);
  } else if (askLowerCase && askSpecial) {
    userChoice = lowerCase.concat(special);
    console.log(userChoice);
  } else if (askUpperCase && askNumeric) {
    userChoice = upperCase.concat(numbers);
    console.log(userChoice);
  } else if (askUpperCase && askSpecial) {
    userChoice = upperCase.concat(special);
    console.log(userChoice);
  } else if (askNumeric && askSpecial) {
    userChoice = numbers.concat(special);
    console.log(userChoice);
  }//if only picked 1 options
  else if (askLowerCase) {
    userChoice = lowerCase;
    console.log(userChoice);
  } else if (askLowerCase) {
    userChoice = lowerCase;
    console.log(userChoice);
  } else if (askUpperCase) {
    userChoice = upperCase;
    console.log(userChoice);
  } else if (askNumeric) {
    userChoice = numbers;
    console.log(userChoice);
  } else if (askSpecial) {
    userChoice = special;
    console.log(userChoice);
  }

  //create a blank container to hold the array from following for loop
  var blankContainer = [];

  //for loop to random pick element and array.push() will input every choice into the blank container.
  for (var i = 0; i < lengthOfCharacters; i++) {
    var randomChoice = userChoice[Math.floor(Math.random() * userChoice.length)];
    blankContainer.push(randomChoice);
    
  }console.log(blankContainer);
  
  //use array.join and "" to create no space between elements.
  var password = blankContainer.join("");
  console.log("Your password is " + password);
  window.alert("Your password has been successfully generated! \nPlease see your password in the box below.🔑");
  return password;
}

// Write password to the #password input
function writePassword() {
  //when click the bitton, it presented with a series of prompts for password criteria.
  var startingPrompt = window.alert("Password Generator requirement: \n 1. Choose a length with at least 8 characters and no more than 128 characters. \n 2. Pick criteria: lowercase, uppercase, numeric, and/or special characters")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
