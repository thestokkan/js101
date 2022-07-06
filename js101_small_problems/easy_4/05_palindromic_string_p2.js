// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

// Examples:

// isRealPalindrome('madam');               // true
// isRealPalindrome('Madam');               // true (case does not matter)
// isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
// isRealPalindrome('356653');              // true
// isRealPalindrome('356a653');             // true
// isRealPalindrome('123ab321');            // false

function isAlphanum(char) {
  return /[A-Za-z0-9]/.test(char);
}

function cleanString(str) {
  let cleanedStr = "";

  str.split("").forEach((char) => {
    if (isAlphanum(char)) {
      cleanedStr = cleanedStr + char;
    }
  });

  return cleanedStr;
}

function reverse(string) {
  let strArr = string.split("");
  let reversedArr = [];
  let i = 0;

  while (strArr[0]) {
    reversedArr.push(strArr.pop());
  }
  return reversedArr.join("");
}

function isRealPalindrome(sentence) {
  let cleanedSentence = cleanString(sentence);
  return (
    cleanedSentence.toLowerCase() === reverse(cleanedSentence).toLowerCase()
  );
}

console.log(isRealPalindrome("madam")); // true
console.log(isRealPalindrome("Madam")); // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
console.log(isRealPalindrome("356653")); // true
console.log(isRealPalindrome("356a653")); // true
console.log(isRealPalindrome("123ab321")); // false
