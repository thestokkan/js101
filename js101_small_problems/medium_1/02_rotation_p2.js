// Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

// PEDAC
// Input: two integer numbers (`inputNumber` and `count`)
// Output: integer number (`rotatedNumber`)

// Explicit rules
// - Rotate the last `count` digits of the inputNumber
// - Move the `count` digit, counted from the end, to the end of the number
// - Shift the remaining digits to the left

// Implicit rules
// - If `count` is `1`, return the same number

// Questions
// - What if either argument is not an integer number or negative?
// - What if `count` is 0 or larger than the number of digits?

// => Assumptions
// - Arguments are always positive integer numbers
// - The second argument is always equal to or less than the number of digits in the first argument (but > 0)

// Data structure(s): array (or string?) to work with digits, output as number

// Algorithm
// Convert inputNumber to string
// Split string in two parts
// - First part: 0 up until `-count`
// - Second part: `-count` to end
// Rotate second part so the first digit becomes the first
// - Split string into array
// - Use function from previous exercise
// - Convert result back to string
// Combine first part with rotated second part
// Convert to number
// Log number to console

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

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);
