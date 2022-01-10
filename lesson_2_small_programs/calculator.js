// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const read = require("readline-sync");

console.log("Welcome to calculator!");

console.log("What's the first number?");
let number1 = read.question();

console.log("What's the second number?");
let number2 = read.question();

console.log(
  "What operation would you like to perform?\n1) Add \n2) Subtract \
\n3) Multiply \n4) Divide"
);
let operation = read.question();

let output;
switch (operation) {
  case "1":
    output = Number(number1) + Number(number2);
    break;
  case "2":
    output = Number(number1) - Number(number2);
    break;
  case "3":
    output = Number(number1) * Number(number2);
    break;
  case "4":
    output = Number(number1) / Number(number2);
    break;
  default:
    console.log("Please enter 1-4: ");
}

console.log(`The result is ${output.toFixed(2)}`);
