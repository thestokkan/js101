// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

function countOccurrences(arr) {
  let count = {};

  arr.forEach((el) => {
    if (Object.keys(count).includes(el)) {
      count[el] += 1;
    } else {
      count[el] = 1;
    }
  });

  Object.keys(count).forEach((vehicle) => {
    console.log(`${vehicle} => ${count[vehicle]}`);
  });
}

let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "motorcycle",
  "car",
  "truck",
];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
