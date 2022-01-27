// Question 4
//
// Starting with the string:

let famousWords = "seven years ago...";
// show two different ways to put the expected "Four score and " in front of it.

let prefix = "Four score and ";

console.log(`${prefix}${famousWords}`);
console.log(prefix + famousWords);
console.log(prefix.concat(famousWords));