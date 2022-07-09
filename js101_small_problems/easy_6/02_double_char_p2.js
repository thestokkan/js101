// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

function isConsonant(char) {
  return /[a-z]/i.test(char) && !/[aeiou]/i.test(char);
}

function doubleConsonants(str) {
  let doubledArr = str.split("").map((char) => {
    if (isConsonant(char)) {
      return char + char;
    } else {
      return char;
    }
  });

  return doubledArr.join("");
}

console.log(doubleConsonants("String") === "SSttrrinngg");
console.log(doubleConsonants("Hello-World!") === "HHellllo-WWorrlldd!");
console.log(doubleConsonants("July 4th") === "JJullyy 4tthh");
console.log(doubleConsonants("") === "");
