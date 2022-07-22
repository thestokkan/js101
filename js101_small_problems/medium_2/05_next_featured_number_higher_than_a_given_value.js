// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

// NOTE: The largest possible featured number is 9876543201.

// PEDAC
// Input: integer (lower limit for featured number)
// Output: integer (featured number)

// Rules
// - Featured number:
//  - Odd
//  - Multiple of 7
//  - No repeat digits
// - Largest possible featured number is 9876543201
//  - Upper limit, inclusive: 9876543201
// - Find the next featured number _larger_ than the lower limit input integer
//  - Lower limit, inclusive: input integer + 1
// - Issue error message if no next featured number

// Assumptions
// - Input is always an integer number

// Algorithm
// - IF input integer is odd, set lowerLimit to input + 2
// - ELSE, set lowerLimit to input + 1
// - Loop from lowerLimit to upperLimit in increments of 2 (only odd numbers)
// - FOR each number
// - IF number is divisable by 7 and has only unique digits, RETURN number
//  - Unique digits:
//    - Initialize an empty array to hold checked characters
//    - Convert number to string and split by character -> array
//    - LOOP through array of characters
//    - IF the `checked` array includes the character, return FALSE
//    - ELSE, push current character to `checked` array
//    - RETURN TRUE
// - ELSE, RETURN error message

function uniqueDigits(num) {
  let checked = [];
  let status = true;

  num
    .toString()
    .split("")
    .forEach((digit) => {
      if (checked.includes(digit)) status = false;
      checked.push(digit);
    });

  return status;
}

function featured(num) {
  let lowerLimit = num + (num % 2) + 1;
  let upperLimit = 9876543201;

  for (let n = lowerLimit; n <= upperLimit; n += 2) {
    if (n % 7) continue;
    if (uniqueDigits(n)) return n;
  }
  return "There is no possible number that fulfills those requirements.";
}

console.log(featured(12) === 21);
console.log(featured(20) === 21);
console.log(featured(21) === 35);
console.log(featured(997) === 1029);
console.log(featured(1029) === 1043);
console.log(featured(999999) === 1023547);
console.log(featured(999999987) === 1023456987);
console.log(featured(9876543186) === 9876543201);
console.log(featured(9876543200) === 9876543201);
console.log(
  featured(9876543201) ===
    "There is no possible number that fulfills those requirements."
);
