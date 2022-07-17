// Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

// Assumption: the first alphabetical character should be uppercase, even if preceded by a non-alphabetic character

// Don't need to test if the current character is alphabetic since toLowerCase() and toUpperCase() don't impact non-alphabetic characters.

// Algorithm
// - Declare status variable, initialize to `true`
// - Declare result variable (staggeredStr), initialize to empty string
// - Loop through inputString one character at a time
//  - If not alphabetical, add current character to outputStr
//  - If status variable is `true`, add uppercased current character to outputStr and set status = `false`
//  - Else, add lowercased current character to outputStr and set status = `true`
// - Return outputStr

function staggeredCase(inputStr) {
  let status = true;
  let staggeredStr = "";

  inputStr.split("").forEach((char) => {
    if (!/[a-z]/i.test(char)) {
      staggeredStr += char;
    } else if (status) {
      staggeredStr += char.toUpperCase();
      status = false;
    } else {
      staggeredStr += char.toLowerCase();
      status = true;
    }
  });

  console.log(staggeredStr);
  return staggeredStr;
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(staggeredCase("2ALL CAPS") === "2AlL cApS");
console.log(
  staggeredCase("2ignore 77 the 444 numbers") === "2IgNoRe 77 ThE 444 nUmBeRs"
);
