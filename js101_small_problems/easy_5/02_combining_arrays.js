// Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

// Example:

// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

function union(arr1, arr2) {
  let arrUnion = [];

  arr1.forEach((el) => {
    if (!arrUnion.includes(el)) {
      arrUnion.push(el);
    }
  });

  arr2.forEach((el) => {
    if (!arrUnion.includes(el)) {
      arrUnion.push(el);
    }
  });

  console.log(arrUnion);
}

union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]
union([1, 3, 5, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]
