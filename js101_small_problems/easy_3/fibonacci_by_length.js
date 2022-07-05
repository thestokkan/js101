// Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer greater than or equal to 2.

// findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// // The last example may take a minute or so to run.

// Use BigInt integers by appending 'n' to any numbers in solution

// PEDAC
// Input argument: integer greater than 2
// Output: index of first Fibonacci number with number of digits equal to input

// Declare an array, fibArray to hold Fibonacci numbers (fibNum), assign the first two indices the integer 1.
// Infinite while loop:
// - Declare currentFibNum and assign it the last value in the fibArray
// - If currentFibNum has number of digits equal to input integer, break and return (or log) the index of that number.
//  - Convert currentFibNum to string and get length of string
// - Else, calculate the next fibNum and push it to the fibArray

function findFibonacciIndexByLength(input) {
  let fibArray = [1n, 1n];

  while (true) {
    let currentFibNum = fibArray[fibArray.length - 1];

    if ((currentFibNum + "").length >= input) {
      return BigInt(fibArray.length);
    }

    currentFibNum =
      fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    fibArray.push(currentFibNum);
  }
}

console.log(findFibonacciIndexByLength(1) === 2n); // true
console.log(findFibonacciIndexByLength(2) === 7n); // true
console.log(findFibonacciIndexByLength(3) === 12n); // true
console.log(findFibonacciIndexByLength(10) === 45n); // true
console.log(findFibonacciIndexByLength(100) === 476n); // true
console.log(findFibonacciIndexByLength(1000n) === 4782n); // true

// Notes:
// 1. With the current code, there is no reason to append 'n' to the input.
// 2. Make sure that the starting numbers in the fibArray are BigInt objects! (Docs: A BigInt object cannot be mixed with a Number value in operations, they must be coerced to the same type.)
