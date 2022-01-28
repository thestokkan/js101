// Question 4
//
// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// Expected output: [{ first: 42 }, { second: "value2" }, 3, 4, 5]

// Explanation: `slice()` returns a shallow copy of the original array.
// Reassigning first-level elements of `arr2` will not be reflected in `arr1`,
// but reassigning any elements at deeper levels (in nested structures) will.