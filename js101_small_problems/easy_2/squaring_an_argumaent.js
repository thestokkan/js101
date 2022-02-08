// Squaring an Argument
//
// Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).
//

// Using multiply function
const multiply = (a, b) => a * b;

const square = a => multiply(a, a);

// Example:
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

// Not using multiply function
const square2 = a => a * a;

// Example:
console.log(square2(5) === 25); // logs true
console.log(square2(-8) === 64); // logs true

// Further Exploration
//
// What if we wanted generalize this function to a "power to the n" type function: cubed, to the 4th power, to the 5th, etc. How would we go about doing so while still using the multiply() function?

const power = (n, p) => {
  if (p <= 1) return n;
  return multiply(n, power(n, p - 1));
}

console.log(power(5, 3) === 125); // logs true
console.log(power(2, 10) === 1024); // logs true