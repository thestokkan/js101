// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

// Example:

// cleanUp("---what's my +*& line?");    // " what s my line "

// PEDAC-ish
// Input: string of words and non-alphabetic characters
// Output: new string
// - non-alphabetic characters have been replaced by spaces

// Explicit rules
// - not consecutive spaces
// Implicit rules
// - There can be spaces at beginning and end of string
// Assumptions
// - Input will always be a string

// Declare a newString variable and assign it an empty string
// Loop through input string, one character at a time
// - Create array where each element is assigned one character of the string
// - Loop through the array
// Check if character is alphabetic (subfunction)
// - If character converted to lower case does not equal character converted to upper case, return 'true' (alt. use regex expression with test() function). Otherwise, return false (also if input is not a string)
// If current character is alphabetic, concatenate to newString
// If current character is non-alphabetic...
//  If last character of newString is not a space, concatenate a space to newString
//  Else, do nothing (continue loop)
// Print newString

function charIsLetter(char) {
  if (typeof char !== "string") {
    return false;
  }

  return char.toUpperCase() !== char.toLowerCase();
}

function cleanUp(messyString) {
  let newString = "";

  messyString.split("").forEach((character) => {
    if (charIsLetter(character)) {
      newString = newString + character;
    } else {
      if (newString.slice(-1) !== " ") {
        newString = newString + " ";
      }
    }
  });

  console.log(newString);
}

cleanUp("---what's my +*& line?");
cleanUp("**My22name`is*(!!Therese_");
