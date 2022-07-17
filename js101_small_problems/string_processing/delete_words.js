// Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

function removeVowels(strArr) {
  let noVowelsArr = [];

  strArr.forEach((str) => {
    let noVowelsStr = "";
    str.split("").forEach((char) => {
      if (/[^aeiou]/i.test(char)) {
        noVowelsStr += char;
      }
    });

    noVowelsArr.push(noVowelsStr);
  });

  console.log(noVowelsArr);
}

removeVowels(["abcdefghijklmnopqrstuvwxyz"]); // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(["green", "YELLOW", "black", "white"]); // ["grn", "YLLW", "blck", "wht"]
removeVowels(["ABC", "AEIOU", "XYZ"]); // ["BC", "", "XYZ"]
