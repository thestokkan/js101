// How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

let arr = ["10", "11", "9", "7", "8"];

let arrSorted = arr.sort((a, b) => Number(b) - Number(a));
console.log(arrSorted);

// I've used explicit conversion to number, but this can be omitted and use implicit conversion instead:

let arrSorted2 = arr.sort((a, b) => b - a);
console.log(arrSorted2);
