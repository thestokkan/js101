let read = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt("Welcome to the loan calculator!");

prompt("Please enter loan amount in dollars:");
let loanAmount = read.question();

while (
  invalidNumber(loanAmount) ||
  Number(loanAmount) < 100 ||
  Number(loanAmount) > 1e7
) {
  prompt("Please enter a number between 100 and 10000000: ");
  loanAmount = read.question();
}

prompt("Please enter the annual percentage rate (1-100):");
let APR = read.question();

while (invalidNumber(APR) || Number(APR) < 1 || Number(APR) > 100) {
  prompt("Please enter a number between 1 and 100: ");
  APR = read.question();
}

prompt("Please enter loan duration in years (1-30):");
let durationYears = read.question();

while (
  invalidNumber(durationYears) ||
  Number(durationYears) < 1 ||
  Number(durationYears) > 30
) {
  prompt("Please enter a number between 1 and 30: ");
  durationYears = read.question();
}

durationYears = Number(durationYears);
loanAmount = Number(loanAmount);
APR = Number(APR);

let durationMonths = durationYears * 12;
let monthlyRateDec = APR / 100 / 12;

let monthlyPayment =
  loanAmount *
  (monthlyRateDec / (1 - Math.pow(1 + monthlyRateDec, -durationMonths)));

console.log("\nRESULTS");
console.log("-------------------");
console.log(`Loan amount: $${loanAmount.toFixed(2)}`);
console.log(`Annual percentage rate: ${APR.toFixed(1)} %`);
console.log(`Loan duration: ${durationYears.toFixed(1)} years`);
console.log(`Number of payments: ${durationMonths.toFixed(1)}`);
console.log(`Monthly payment: $${monthlyPayment.toFixed(2)}`);