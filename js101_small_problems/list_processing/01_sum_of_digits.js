// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

// Not sure how to do this and not count number of digits with a loop
// I've currently solved it using the reduce function

function sum(num) {
  let numArr = num
    .toString()
    .split("")
    .map((num) => Number(num));

  let sum = numArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  console.log(sum);
}

sum(23); // 5
sum(496); // 19
sum(123456789); // 45
