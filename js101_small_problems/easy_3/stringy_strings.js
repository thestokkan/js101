// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

// Examples:

// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

// Input: Integer
// Output: String of alternating '1's and '0's, always starting with a '1'
// Length of string equals integer

// Assumptions
// - Input is always a positive integer

// Declare a starting string and assign it the value '1'
// Infinite while loop:
// If the length of the string is larger than inputInteger, break and return string
// Append '0' to the string
// If the length of the string is larger than inputInteger, break and return string
// Append '1' to the string

function stringy(inputInteger) {
  numberString = "1";

  while (true) {
    if (numberString.length >= inputInteger) {
      break;
    }

    numberString = numberString + "0";

    if (numberString.length >= inputInteger) {
      break;
    }

    numberString = numberString + "1";
  }
  console.log(numberString);
}

stringy(6); // "101010"
stringy(9); // "101010101"
stringy(4); // "1010"
stringy(7); // "1010101"
