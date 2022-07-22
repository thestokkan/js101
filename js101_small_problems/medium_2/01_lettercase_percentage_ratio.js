// Write a function that takes a string and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

// PEDAC
// Input: string with at least one character
// Output: Object with three properties
// - Percentage uppercase letters
// - Percentage lowercase letters
// - Percentage non-alphabetic characters

// Explicit rules
// - Assume there will always be at least one character in the input string

// Implicit rules
// - The input will always be a string
// - Spaces count as characters (see examples)
// - Percentages shall be formatted with two digits after comma and as strings

// Algorithm
// 1. Declare and initialize variable lettercasePerc to object containing the three properties, each with an empty string value.
// 2. Declare count variables lowerCaseCount and upperCaseCount, initialize to 0
// 3. Count totalCharacters in string: string length
// 4. Count number of upper- and lowercase letters:
// Split string by character and loop through the resulting array
// - If the current character is uppercase, update upperCaseCount by 1
// - If the current character is lowercase, update lowerCaseCount by 1
// 5. Calculate percentages and format results
// - Divide upper- and lowercase counters by totalCharacters
// - Non-alphabetic characters: 100 - %upperCasePercentage - %lowerCasePercentage
// - Format percentages: two digits after comma, convert to string
// 6. Add results to object
// 5. Return object

function letterPercentages(str) {
  let lettercasePerc = {
    lowercase: "",
    uppercase: "",
    neither: "",
  };

  let totalCharacters = str.length;
  let lowerCaseCount = 0;
  let upperCaseCount = 0;

  str.split("").forEach((char) => {
    if (/[a-z]/.test(char)) lowerCaseCount += 1;
    if (/[A-Z]/.test(char)) upperCaseCount += 1;
  });

  let lowerCasePercentage = (lowerCaseCount / totalCharacters) * 100;
  let upperCasePercentage = (upperCaseCount / totalCharacters) * 100;
  let neitherPercentage = 100 - lowerCasePercentage - upperCasePercentage;

  lettercasePerc.lowercase = lowerCasePercentage.toFixed(2).toString();
  lettercasePerc.uppercase = upperCasePercentage.toFixed(2).toString();
  lettercasePerc.neither = neitherPercentage.toFixed(2).toString();

  console.log(lettercasePerc);
}

letterPercentages("abCdef 123");
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages("AbCd +Ef");
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages("123");
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
