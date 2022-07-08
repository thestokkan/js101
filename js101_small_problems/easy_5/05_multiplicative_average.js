// Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

function multiplicativeAverage(arr) {
  let prod = 1;

  arr.forEach((el) => {
    prod *= el;
  });

  let avgProd = prod / arr.length;

  console.log(avgProd.toFixed(3));
}

multiplicativeAverage([3, 5]); // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]); // "28361.667"
