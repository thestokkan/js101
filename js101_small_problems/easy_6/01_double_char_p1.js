// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

function repeater(str) {
  let doubledArr = str.split("").map((char) => {
    return char + char;
  });

  return doubledArr.join("");
}

console.log(repeater("Hello") === "HHeelllloo");
console.log(repeater("Good job!") === "GGoooodd  jjoobb!!");
console.log(repeater("") === "");
