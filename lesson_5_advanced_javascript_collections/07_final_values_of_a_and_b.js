// Given the following code, what will the final values of a and b be? Try to answer without running the code.

let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2; // arr[0] = arr[0] + 2
arr[1][0] -= a; // arr[1][0] = arr[1][0] - a

// On line 7, arr[0] is reassigned, which does not affect a (a is not referenced at any point)
console.log(a); // 2

// On line 8, an element of the sub-array is reassigned. The arr[1] still references the same array as b, so the change is reflected in b.
console.log(b); // [3, 8]

// The array arr is mutated with new values at both arr[0] and arr[1].
console.log(arr); // [4, [3, 8]]
