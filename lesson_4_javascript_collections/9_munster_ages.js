// Practice Problem 9

// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};


let sumAges = 0;
let agesArr = Object.values(ages);

agesArr.forEach(age => sumAges += age);

console.log(sumAges);

// With `reduce`:

console.log(Object.values(ages).reduce((sum, age) => sum + age, 0));

