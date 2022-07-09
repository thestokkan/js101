// Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

function isBalanced(str) {
  let leftCount = 0;

  str.split("").forEach((char) => {
    if (leftCount < 0) {
      return false;
    }

    if (char === "(") {
      leftCount += 1;
    }

    if (char === ")") {
      leftCount -= 1;
    }
  });

  return leftCount === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
// The tests above should log true.

// Note that balanced pairs must each start with a (, not a ).
