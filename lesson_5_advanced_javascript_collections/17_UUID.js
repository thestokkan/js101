// A UUID is a type of identifier often used to uniquely identify items, even when some of those items were created on a different server or by a different application. That is, without any synchronization, two or more computer systems can create new items and label them with a UUID with no significant risk of stepping on each other's toes. It accomplishes this feat through massive randomization. The number of possible UUID values is approximately 3.4 X 10E38, which is a huge number. The chance of a conflict is vanishingly small with such a large number of possible values.

// Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

// Write a function that takes no arguments and returns a string that contains a UUID.

// PEDAC
// 1. Create a string with 32 random characters from list
//  -  Create a list of numbers 0-9 and lower-case letters a-f
//  - Initialize variable to empty string
//  - For loop with 32 iterations: append random character to string
// 2. Split string in 8-4-4-4-12 pattern
//  - use slice, save to array, then use join('-')

function generateUUID() {
  const characters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  const segments = [8, 4, 4, 4, 12];

  let uuid = "";

  segments.forEach((segment, index) => {
    for (let i = 0; i < segment; i++) {
      let randIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randIndex];
    }

    if (index < segments.length - 1) {
      uuid += "-";
    }
  });

  return uuid;
}

console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());
