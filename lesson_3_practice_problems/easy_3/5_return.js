// Question 5
//
// The following function unnecessarily uses two return statements to return
// boolean values. Can you rewrite this function so it only has one return
// statement and does not explicitly use either true or false?

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// 1
function isColorValid(color) {
  return color === "blue" || color === "green";
}

console.log(isColorValid("green")); // true
console.log(isColorValid("blue")); // true
console.log(isColorValid("red")); // false

// As arrow statement
const isColorValid2 = color => color === "blue" || color === "green";

console.log(isColorValid2("green")); // true
console.log(isColorValid2("blue")); // true
console.log(isColorValid2("red")); // false

// 2
function isColorValid3(color) {
  return ["blue", "green"].includes(color);
}

console.log(isColorValid3("green")); // true
console.log(isColorValid3("blue")); // true
console.log(isColorValid3("red")); // false
