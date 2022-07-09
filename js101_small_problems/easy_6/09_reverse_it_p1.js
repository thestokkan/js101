// Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.

function reverseSentence(str) {
  let wordArr = str.split(" ");
  let reversedArr = [];

  while (wordArr.length > 0) {
    reversedArr.push(wordArr.pop());
  }

  let revStr = reversedArr.join(" ");
  console.log(revStr);
}

reverseSentence(""); // ""
reverseSentence("Hello World"); // "World Hello"
reverseSentence("Reverse these words"); // "words these Reverse"
