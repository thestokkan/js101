// Odd Lists
//
// Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

function oddities(arr) {
  return arr.filter((el, index) => index % 2 === 0);
}


// Examples:
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []


// Further Exploration
//
// Write a companion function that returns the 2nd, 4th, 6th, and so on elements of an array.
//
// Try to solve this exercise in a different way.


function evens(arr) {
  let evenElements = [];
  arr.forEach(el => {
    if (arr.indexOf(el) % 2 === 1) {
      evenElements.push(el);
    }
  });
  return evenElements;
}

console.log(evens([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evens([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evens(["abc", "def"])); // logs ['def']
console.log(evens([123])); // logs []
console.log(evens([])); // logs []