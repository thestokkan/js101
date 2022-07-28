// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arr = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3],
];

let arrSorted = arr.sort((a, b) => {
  let aOddSum = a
    .filter((num) => num % 2 === 1)
    .reduce((sum, num) => sum + num);
  let bOddSum = b
    .filter((num) => num % 2 === 1)
    .reduce((sum, num) => sum + num);

  return aOddSum - bOddSum;
});

console.log(arrSorted);

// Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:

// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]
