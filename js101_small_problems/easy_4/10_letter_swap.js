// Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

// You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

// Examples:

// Copy Code
// swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
// swap('Abcde');                          // "ebcdA"
// swap('a');                              // "a"

// PEDAC
// Input: string of space separated words
// Output: string where first and last letter of every word is swapped

// Rules:
// - Swap first and last letter in every space separated word of input string
// - Keep capitalization
// - If there is only one letter in the string, the output is the same as the input.
// - Assume that
//  - every word contains at least one letter
//  - every string contains at least one word
//  - each string contains only words and spaces
//  - there are no trailing, leading or repeated spaces

// Algo
// Declare empty array processedWords
// Split string into words
// For each word,
// - create a new word by swapping the first and last characters
//  - add together: the last character + middle part of word + first character
// - if the word has one character or less, don't do anything
// - push the modified words to processedWords array
// Join words in processedWords array to string
// Print string


function swap(str) {
  let processedWords = []; 
  let swappedWord;

  str.split(" ").forEach(word =>  {
    if (word.length > 1) {
      swappedWord = word.slice(-1) + word.slice(1,-1) + word.slice(0,1);
    } else {
      swappedWord = word;
    }

    processedWords.push(swappedWord);
  });  

  console.log(processedWords.join(" ")); 
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"