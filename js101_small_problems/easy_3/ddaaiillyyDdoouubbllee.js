function crunch(str) {
  let newString = "";

  str.split("").forEach(letter => {
    let previousLetter = newString.slice(-1);
    
    if (letter !== previousLetter) {
      newString = newString.concat(letter);
    }
  });

  newString;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');     