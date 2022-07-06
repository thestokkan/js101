// Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

// Examples:

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.

let read = require("readline-sync");

let numArray = [];
let pos = ['1st', '2nd', '3rd', '4th', '5th'];

for (let i = 0; i < pos.length; i++) {
  numArray[i] = read.question(`Enter the ${pos[i]} number: `);
}

lastNum = read.question("Enter the last number: ");

let numArrayList = `${numArray[0]},${numArray[1]},${numArray[2]},${numArray[3]},${numArray[4]}`;

if (numArray.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${numArrayList}.`);
} else {
  console.log(`The number ${lastNum} does not appear in ${numArrayList}.`); 
}
