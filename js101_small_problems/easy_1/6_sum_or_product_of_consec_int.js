// Sum or Product of Consecutive Integers
//
// Write a program that asks the user to enter an integer greater than 0,
// then asks whether the user wants to determine the sum or the product of all
// numbers between 1 and the entered integer, inclusive.
//
// Examples:
//
// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s
//
// The sum of the integers between 1 and 5 is 15.
// Copy Code
// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p
//
// The product of the integers between 1 and 6 is 720.

let read = require('readline-sync');
let num = read.question("Please enter an integer greater than 0: ");
let choice = read.question('Enter "s" to compute the sum, or "p" \
to compute the product: ');

if (choice === 's') {
  let result = 0;
  for (let i = 1; i <= num ; i++) {
  result += i;
  }

  console.log(`The sum of the integers between 1 and ${num} is ${result}.`);
} else if (choice === 'p') {
  let result = 1;
  for (let i = 1; i <= num; i++) {
  result *= i;
}
  console.log(`The product of the integers between 1 and ${num} is ${result}.`);
} else {
  console.log("That's not what I asked for...");
}