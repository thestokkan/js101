// Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

function isUppercase(str) {
  let result = true;

  str.split("").forEach((char) => {
    if (char !== char.toUpperCase()) {
      result = false;
    }
  });

  console.log(result);
}

isUppercase("t"); // false
isUppercase("T"); // true
isUppercase("Four Score"); // false
isUppercase("FOUR SCORE"); // true
isUppercase("4SCORE!"); // true
isUppercase(""); // true
