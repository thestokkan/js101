// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const msg = require("./calculator_msg.json").no;

const read = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt(msg.welcome);

let again = true;

do {
  prompt(msg.firstNumber);
  let number1 = read.question();

  while (invalidNumber(number1)) {
    prompt(msg.validNumber);
    number1 = read.question();
  }

  prompt(msg.secondNumber);
  let number2 = read.question();

  while (invalidNumber(number2)) {
    prompt(msg.validNumber);
    number2 = read.question();
  }

  prompt(msg.operation);
  let operation = read.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(msg.validOperation);
    operation = read.question();
  }

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
  }

  prompt(msg.resultIs + `${output.toFixed(2)}`);

  prompt(msg.again);
  let answer = read.question();

  if (!["y", "yes"].includes(answer.toLowerCase())) {
    again = false;
  }
} while (again);
