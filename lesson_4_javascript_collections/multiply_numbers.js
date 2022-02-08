function multiply(numbers, multiplier) {
  let multiplied = [];

  numbers.forEach(num => multiplied.push(num * multiplier));

  return multiplied;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
console.log(multiply(myNumbers, 10)); // => [ 10, 40, 30, 70, 20, 60 ]