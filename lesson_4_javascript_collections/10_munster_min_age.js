// Practice Problem 10

// Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

const agesArr = Object.values(ages);

// With reduce
const getMin = (a, b) => Math.min(a, b);
console.log(agesArr.reduce(getMin));

// With spread syntax
console.log(Math.min(...agesArr));




