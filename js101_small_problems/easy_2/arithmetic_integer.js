// Arithmetic Integer
//
// Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.
//
// Example
//
// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23
//
// The final output above shows how JavaScript displays numbers that are too large for its Number type. The number represents approximately 1.41 * 100,000,000,000,000,000,000,000 using what is called floating-point notation. If you want to see what the exact value is, you can use JavaScript's BigInt type by appending an n to both 23 and 17:
//
//
// > 23n ** 17n    // 141050039560662968926103n


let read = require('readline-sync');

function prompt(text) {
  console.log(`==> ${text}`);
}

prompt('Whas is the first number?');
const n1 = read.question();
prompt('What is the second number?');
const n2 = read.question();

prompt(`${n1} + ${n2} = ${n1 + n2}`);
prompt(`${n1} - ${n2} = ${n1 - n2}`);
prompt(`${n1} * ${n2} = ${n1 * n2}`);
prompt(`${n1} / ${n2} = ${Math.floor(n1 / n2)}`);
prompt(`${n1} % ${n2} = ${n1 % n2}`);
prompt(`${n1} ** ${n2} = ${n1 ** n2}`);