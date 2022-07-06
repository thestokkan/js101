// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

// Example:

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

let read = require('readline-sync');
let today = new Date();
let currentYear = today.getFullYear();

console.log(`Current year: ${currentYear}`);

let age = Number(read.question("What is your age? "));
let retireAge = Number(read.question("At what age would you like to retire? "));
let retireYear = currentYear + retireAge - age;

console.log("");
console.log(`It's ${currentYear}. You will retire in ${retireYear}`);
console.log(`You have only ${retireYear - currentYear} years to go!`);