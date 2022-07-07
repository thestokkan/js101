// Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

// Examples:

// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []

// Step  by step:
// 1. runningTot[0] = arr[0]
// 2. runningTot[1] = runningTot[0] + arr[1]
// 3. runningTot[2] = runningTot[1] + arr[2]
// 4. runningTot[3] = runningTot[2] + arr[3]

function runningTotal(arr) {
  let runningTot;
  let currentTot;

  if (!arr[0]) {
    runningTot = [];
  } else {
    runningTot = [arr[0]];
  }

  arr.forEach((el, i) => {
    if (arr[i - 1]) {
      currentTot = arr[i] + runningTot[i - 1];
      runningTot.push(currentTot);
    }
  });
  console.log(runningTot);
}

runningTotal([2, 5, 13]); // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]); // [14, 25, 32, 47, 67]
runningTotal([3]); // [3]
runningTotal([]); // []
