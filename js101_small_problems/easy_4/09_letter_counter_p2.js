// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

// Examples:

// Copy Code
// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
// wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
// wordSizes('');                                            // {}


function isAlphabetical(char) {
  return /[A-Za-z]/.test(char);
}

function wordSizes(str) {
  let wordCount = {};
  let wordLength;

  if (str !== "") {
    str.split(" ").forEach((word) => {
      let cleanedWord = "";

      word.split("").forEach(char => {
        if (isAlphabetical(char)) {
          cleanedWord = cleanedWord + char;
        }
      });

      wordLength = cleanedWord.split("").length.toString();

      if (Object.keys(wordCount).includes(wordLength)) {
        wordCount[wordLength] += 1;
      } else {
        wordCount[wordLength] = 1;
      }
    });
  }

  console.log(wordCount);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}
