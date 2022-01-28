// Question 3
//
// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// Expected output: "hello there"
//
// Strings are primitive values and cannot be mutated.
// On line 6, str2 is assigned a copy of the value held by str1.
// The variables are not connected, and reassigning str2 does not affect str1.
