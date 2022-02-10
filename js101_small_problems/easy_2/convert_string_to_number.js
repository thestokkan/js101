// Convert a String to a Number!
//
// The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.
//
// Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.
//
// For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.
//
// You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

function stringToInteger(numStr) {
  let numberArr = [];

  for (let i = 0; i < numStr.length; i += 1) {
    switch (numStr[i]) {
      case "0":
        numberArr.push(0);
        break;
      case "1":
        numberArr.push(1);
        break;
      case "2":
        numberArr.push(2);
        break;
      case "3":
        numberArr.push(3);
        break;
      case "4":
        numberArr.push(4);
        break;
      case "5":
        numberArr.push(5);
        break;
      case "6":
        numberArr.push(6);
        break;
      case "7":
        numberArr.push(7);
        break;
      case "8":
        numberArr.push(8);
        break;
      case "9":
        numberArr.push(9);
        break;
    }
  }
  let value = 0;
  numberArr.forEach(digit => (value = (10 * value) + digit));
  return value;
}

// Examples
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true


// Further Exploration
//
// Write a hexadecimalToInteger() function that converts a string representing a hexadecimal number to its integer value. Note that hexadecimal numbers use base 16 instead of 10, and the "digits" A, B, C, D, E, and F (and the lowercase equivalents) correspond to decimal values of 10-15.

function hexadecimalToInteger(hexString) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };

  let numberArr = hexString.split("").map(digit => DIGITS[digit.toLowerCase()]);

  let value = 0;
  numberArr.forEach(digit => (value = (16 * value) + digit));
  return value;
}


// Example:
console.log(hexadecimalToInteger('4D9f') === 19871);
