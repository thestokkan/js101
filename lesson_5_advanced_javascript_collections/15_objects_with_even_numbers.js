// Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let onlyEvens = arr.filter((obj) => {
  return Object.values(obj).every((arr) => {
    return arr.every((number) => number % 2 === 0);
  });
});

console.log(onlyEvens);
