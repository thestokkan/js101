// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

// Copy Code
// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676

// PEDAC-ish
// Input: number
// Output: as-is if it's a double number, otherwise number * 2
// Check if double number:
// - Convert to string, split in half, check if halves are equal
// - If halves are equal AND the number of digits is even, return the number
// - Else, return number * 2

function twice(number) {
  let numStr = number.toString();
  let firstHalf = numStr.slice(0, -numStr.length / 2);
  let secondHalf = numStr.slice(numStr.length / 2);

  if (firstHalf === secondHalf && numStr.length % 2 === 0) {
    return number;
  }

  return number * 2;
}

// Testing
console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866
console.log(twice(444)); // 888
console.log(twice(107)); // 214
console.log(twice(103103)); // 103103
console.log(twice(3333)); // 3333
console.log(twice(7676)); // 7676
