// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

// Example:

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

let read = require("readline-sync");

function madlibs() {
  let noun = read.question("Enter a noun: ");
  let verb = read.question("Enter a verb: ");
  let adjective = read.question("Enter an ajective: ");
  let adverb = read.question("Enter an adverb: ");

  let sentences = [
    `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`,
    `The ${adjective} ${noun} ${verb} ${adverb} over the lazy dog.`,
    `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle`,
  ];

  console.log(sentences[0]);
  console.log(sentences[1]);
  console.log(sentences[2]);
}

madlibs();
