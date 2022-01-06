// Short Long Short
//
// Write a function that takes two strings as arguments, determines the length of
// the two strings, and then returns the result of concatenating the shorter string,
// the longer string, and the shorter string once again. You may assume that the
// strings are of different lengths.
//
// Examples:

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"


function shortLongShort(string1, string2) {
  if (string1.length < string2.length) {
    console.log(string1 + string2 + string1);
    return string1 + string2 + string1;
  } else {
    console.log(string2 + string1 + string2);
    return string2 + string1 + string2;
  }
}