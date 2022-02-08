function doubleNumbers(numbers) {

  for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] *= 2;
  }
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers));; // => undefined
console.log(myNumbers);;                // => [2, 8, 6, 14, 4, 12]