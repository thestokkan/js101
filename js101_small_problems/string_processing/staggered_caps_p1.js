// Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

function staggeredCase(str) {
  let staggered = "";

  str.split("").forEach((_, i) => {
    if (i % 2 === 0) {
      staggered += str[i].toUpperCase();
    } else {
      staggered += str[i].toLowerCase();
    }
  });
  console.log(staggered);
}

staggeredCase("I Love Launch School!"); // "I LoVe lAuNcH ScHoOl!"
staggeredCase("ALL_CAPS"); // "AlL_CaPs"
staggeredCase("ignore 77 the 4444 numbers"); // "IgNoRe 77 ThE 4444 nUmBeRs"
