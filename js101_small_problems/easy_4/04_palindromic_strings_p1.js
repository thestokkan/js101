// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

// Examples:

// isPalindrome('madam');               // true
// isPalindrome('Madam');               // false (case matters)
// isPalindrome("madam i'm adam");      // false (all characters matter)
// isPalindrome('356653');              // true

function reverse(string) {
  let strArr = string.split("");
  let reversedArr = [];
  let i = 0;

  while (strArr[0]) {
    reversedArr.push(strArr.pop());
  }
  return reversedArr.join("");
}

function isPalindrome(sentence) {
  return sentence === reverse(sentence);
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("Madam")); // false (case matters)
console.log(isPalindrome("madam i'm adam")); // false (all characters matter)
console.log(isPalindrome("356653")); // true
