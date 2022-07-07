// Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

// Examples:

// isPalindromicNumber(34543);        // true
// isPalindromicNumber(123210);       // false
// isPalindromicNumber(22);           // true
// isPalindromicNumber(5);            // true

// Notes
// Assume input is always integer

function reverseNumber(number) {
  return Number(number.toString().split("").reverse().join(""));
}

function isPalindromicNumber(num) {
  return num === reverseNumber(num);
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));
