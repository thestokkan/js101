// Reverse It (Part 2)

// Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");
}

reverseWords("Professional"); // "lanoisseforP"
reverseWords("Walk around the block"); // "Walk dnuora the kcolb"
reverseWords("Launch School"); // "hcnuaL loohcS"
