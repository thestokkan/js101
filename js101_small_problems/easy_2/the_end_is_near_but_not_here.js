// The End Is Near But Not Here
//
// Write a function that returns the next to last word in the String passed to it as an argument.
//
// Words are any sequence of non-blank characters.
//
// You may assume that the input String will always contain at least two words.
//

function penultimate(str) {
  let words = str.split(" ");
  return words[words.length - 2];
}

// Examples:

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

// Further Exploration
//
// Our solution ignored a couple of edge cases because we explicitly stated that you didn't have to handle them: strings that contain just one word, and strings that contain no words.
//
// Suppose we need a function that retrieves the middle word of a phrase/sentence. What edge cases need to be considered? How would you handle those edge cases without ignoring them? Write a function that returns the middle word of a phrase or sentence. It should handle all of the edge cases you thought of.

// Answer
// Edge cases:
// - Even number of words -> return word with lower index
// - One word -> return word
// - Empty string -> return error message
// - Extra white space -> ignore (remove)

function middleOf(str) {
  if (!str) return 'String cannot be empty';

  let words = str
    .trim()
    .split(" ")
    .filter(word => word !== "");   // Remove empty strings

  let middleIndex = Math.floor((words.length - 1) / 2);
  return words[middleIndex];
}

console.log(middleOf("one two three four five") === 'three');
console.log(middleOf("one two three four") === 'two');
console.log(middleOf("one") === 'one');
console.log(middleOf("") === 'String cannot be empty');
console.log(middleOf("one    two three four five") === 'three');
console.log(middleOf("    one two three four five   ") === 'three');
