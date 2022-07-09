// Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

function leadingSubstrings(str) {
  let substrings = [];

  for (i = 0; i < str.length; i++) {
    substrings.push(str.slice(0, i + 1));
  }

  console.log(substrings);
}

leadingSubstrings("abc"); // ["a", "ab", "abc"]
leadingSubstrings("a"); // ["a"]
leadingSubstrings("xyzzy"); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
