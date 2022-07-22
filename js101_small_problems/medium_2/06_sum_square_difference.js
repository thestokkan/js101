// Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

// PEDAC
// UNDERSTAND THE PROBLEM
// - Input: integer (count)
// - Output: integer (calculated)
// - Requirements
//   - Explicit:
//    - Calculate difference between "square of sum" and "sum of squares" of `count` first integers
//   - Implicit:
//    - `count` is inclusive (e.g. `count` = 3, use 1, 2, 3)
//    - Square of sum: Add up integers from 1 to `count`, then square that sum
//    - Sum of squares: Square each integer from 1 to `count`, then add those squares

// EXAMPLES/EDGE CASES
// - see provided

// Assumptions
// - Input is always positive integer

// ALGORITHM
// Initialize sum and sumOfSquares variables to 0
// Loop from 1 to `count` in increments of 1
// for each number
//  - add the number to sum
//  - add the square of the number to sumOfSquares
// return sum squared minus sumOfSquares

function sumSquareDifference(count) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let i = 1; i <= count; i++) {
    sum += i;
    sumOfSquares += i ** 2;
  }

  return sum ** 2 - sumOfSquares;
}

console.log(sumSquareDifference(3) === 22); // --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10) === 2640);
console.log(sumSquareDifference(1) === 0);
console.log(sumSquareDifference(100) === 25164150);
