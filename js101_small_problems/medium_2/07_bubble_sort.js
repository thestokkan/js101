// Bubble Sort is one of the simplest sorting algorithms available. It is not an efficient algorithm, so developers rarely use it in real code. However, it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an array using the bubble sort algorithm.

// A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps. At that point, the array is completely sorted.

// We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.

// For further information — including pseudo-code that demonstrates the algorithm, as well as a minor optimization technique — see the Bubble Sort Wikipedia page.

// Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

// PEDAC
// Input: array with at least two elements
// Output mutated array with sorted elements

// Rules
// - array should be sorted in place
// - Bubble sort
//    - with each pass through the array, consecutive pairs of elements are compared
//    - If the second element is larger than the first, the elements are swapped
//    - The sorting is done when a complete pass is made without any swaps
// Implicit rules
//    - Numbers are sorted in ascending value
//    - Strings are sorted alphabetically in ascending order

// Edge cases
// - Equal values -> no swapping
// - Different data types -> sort as string (ASCII sort)

// Algorithm
// Declare status variable `swap`
// - Loop
//  - Assignment: `swap` = `false`
//  - Iterate through array
//    - Initialize currentEl and nextEl to arr[i] and arr[i + 1], respectively
//    - If arr[i + 1]:
//      - If currentEl > nextEl:
//        - swap elements in place: arr[i] = nextEl; arr[i + 1] = currentEl
//        - reassign `swap` to `true`
// - If a `swap` = `false`, return array

function bubbleSort(arr) {
  let swap;

  do {
    swap = false;
    arr.forEach((_, i) => {
      let currentEl = arr[i];
      let nextEl = arr[i + 1];

      if (arr[i + 1]) {
        if (currentEl > nextEl) {
          arr[i] = nextEl;
          arr[i + 1] = currentEl;
          swap = true;
        }
      }
    });
  } while (swap);

  return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

let array3 = ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"];
bubbleSort(array3);
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
