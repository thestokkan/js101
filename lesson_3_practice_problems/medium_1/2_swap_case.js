// Question 2
//
// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:
//
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`


// function swapCase(str) {
//   let swapped = str.split("").map(char => {
//     char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase();
//   });
//   return swapped.join("");
// }


function swapCase(str) {
  return str.split("").map(char =>  {
    return char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase();
  }).join("");
}

console.log(swapCase(munstersDescription));