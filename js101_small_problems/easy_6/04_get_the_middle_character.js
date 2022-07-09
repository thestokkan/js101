// Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

function centerOf(str) {
  let middleChar;

  if (str.length % 2 === 0) {
    middleChar = str.slice(str.length / 2 - 1, str.length / 2 + 1);
  } else {
    middleChar = str.slice(str.length / 2 - 0.5, str.length / 2 + 0.5);
  }
  console.log(middleChar);
}

centerOf("I Love JavaScript"); // "a"
centerOf("Launch School"); // " "
centerOf("Launch"); // "un"
centerOf("Launchschool"); // "hs"
centerOf("x"); // "x"
