function doubleAtOddIndices(numbers) {
  let doubleAtOdd = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (i % 2 === 1) {
      doubleAtOdd.push(numbers[i] * 2);
    } else {
      doubleAtOdd.push(numbers[i]);
    }
  }
  return doubleAtOdd;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleAtOddIndices(myNumbers));  // => [1, 8, 3, 14, 2, 12]

// not mutated
console.log(myNumbers);               // => [1, 4, 3, 7, 2, 6]