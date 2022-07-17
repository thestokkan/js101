// Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

// PEDAC
// Input: integer number
// Output: integer number

// Rules
// - Rotation = moving the first digit to the end of the number
// - Rotate the entire number
// - Keep the first digit fixed, rotate the rest
// - Keep the first two digits fixed, rotate the rest
// - Repeat, keeping one more digit fixed for each round, until the last pair of digits are rotated.
// - use rotateRightmostDigits function form prev. exercise

// Implicit rules
// - If only one digit, return as-is
// - Leading zeros in final number gets dropped

// Assumptions
// - Input is always a positive integer

// Algorithm
// Convert number to string
// If the length of the string is 1, return string
// Loop: iterate from count = (length of string) to 2
// - Rotate rightmost digits using rotateRightmostDigits with num and count as arguments
// - Update num with the return value of the above function
// Return num

function rotateArray(inputArr) {
  if (!Array.isArray(inputArr)) return undefined;

  let outputArr = inputArr.slice(1);

  if (inputArr.length > 0) {
    outputArr.push(inputArr[0]);
  }

  return outputArr;
}

function rotateRightmostDigits(inputNumber, count) {
  let firstPart = inputNumber.toString().slice(0, -count);
  let secondPart = inputNumber.toString().slice(-count);
  let secondPartRotated = rotateArray(secondPart.split("")).join("");
  let rotatedDigits = Number(firstPart + secondPartRotated);

  return rotatedDigits;
}

function maxRotation(num) {
  let numStr = num.toString();

  for (let count = numStr.length; count >= 2; count--) {
    numStr = rotateRightmostDigits(numStr, count);
  }

  return Number(numStr);
}

console.log(maxRotation(735291) === 321579);
console.log(maxRotation(3) === 3);
console.log(maxRotation(35) === 53);
console.log(maxRotation(105) === 15); // -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);
