// Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

// Examples:

// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');                                            // {}

// PEDAC
// Input: string
// - 0 or more space separated words
// Output: Object with key-value pairs
// - Number of words of different sizes in input string
// - Key: Number of characters in word
// - Value: Number of words with that number of characters

// Explicit rules:
// - Input string can be empty
// - Words are separated by space character(s)
// - Words can be any sequence of non-space characters

// Implicit rules:
// - Output is object with number of characters is key and wordcount is value
// - Empty string input => empty object output
// - Log resulting object to console

// Questions:
// - Can words be separated by more than one space character? => assume yes

// Algorithm
// Declare empty wordCount object
// Split input string into words, store in array
// Loop through array, for each word:
// - Split word into characters
// - Count number of characters
// - Convert number of characters to string and assign to Chars variable
// - Update wordCount object:
//  - if the current Chars key exists, update it's value (add 1)
//  - if the current Chars key does not exist, add it and set value to
// Log object to console

function wordSizes(str) {
  let wordCount = {};
  let wordLength;

  if (str !== "") {
    str.split(" ").forEach((word) => {
      wordLength = word.split("").length.toString();

      if (Object.keys(wordCount).includes(wordLength)) {
        wordCount[wordLength] += 1;
      } else {
        wordCount[wordLength] = 1;
      }
    });
  }

  console.log(wordCount);
}

wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
wordSizes(""); // {}
