// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const MESSAGES = require("./calculator_messages.json");
const read = require("readline-sync");
const LANGUAGE = "no";
const CONFIRM = MESSAGES[LANGUAGE].confirm;

function messages(message, lang = "en") {
  return MESSAGES[lang][message];
}

function prompt(msg) {
  let message = messages(msg, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt("welcome");

let again = true;

do {
  prompt("firstNumber");
  let number1 = read.question();

  while (invalidNumber(number1)) {
    prompt("validNumber");
    number1 = read.question();
  }

  prompt("secondNumber");
  let number2 = read.question();

  while (invalidNumber(number2)) {
    prompt("validNumber");
    number2 = read.question();
  }

  prompt("operation");
  let operation = read.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt("validOperation");
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

  prompt("resultIs")
  console.log(`${output.toFixed(2)}`);

  prompt("again");
  let answer = read.question();

  if (!CONFIRM.includes(answer.toLowerCase())) {
    again = false;
  }
} while (again);
