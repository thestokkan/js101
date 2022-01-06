// How big is the room?
//
// Build a program that asks the user to enter the length and width of a room in
// meters, and then logs the area of the room to the console in both square meters
// and square feet.
//
// Note: 1 square meter == 10.7639 square feet
//
// Do not worry about validating the input at this time. Use the readlineSync.prompt
//  method to collect user input.
//
// Examples:
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).


const FEET_CONSTANT = 10.7639;

let read = require('readline-sync');
let lengthInMeters = read.question("Enter the length of the room in meters: ");
let widthInMeters = read.question("Enter the width of the room in meters: ");

let areaInMeters = lengthInMeters * widthInMeters;
let areaInFeet = areaInMeters * FEET_CONSTANT;

console.log(`The area of the room is ${areaInMeters.toFixed(2)} square \
meters (${areaInFeet.toFixed(2)} square feet).`);
