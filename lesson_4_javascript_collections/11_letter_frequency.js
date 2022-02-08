// Practice Problem 11
//
// Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

// The output will look something like the following:
//
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let characters = statement.split("").filter(char =>  char !== ' ');
let tally = {};

characters.forEach(char => {
  if (Object.keys(tally).includes(char)) {
    tally[char] += 1;
  } else {
    tally[char] = 1;
  }
});

console.log(tally);


// Using short-circuiting
//  The value of the last evaluated expression is returned
charsInStatement.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
});