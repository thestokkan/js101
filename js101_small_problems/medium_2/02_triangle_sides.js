// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// PEDAC
// Input: three numbers (triangle side lengths)
// Output: String with triangle classification

// Rules:
// Triangle classifications:
// - Equilateral: a = b = c
// - Isosceles: a = b != c
// - Scalene: a != b != c != a
// - Valid: a, b, c > 0 && short1 + short2 > long

// Implicit rules:
// - Numbers can be integer or decimal

// Assumptions
// - The order of arguments does not imply relative length (e.g. don't assume that the lengths are given in increasing length)
// - Numbers are positive or zero, not negative

// Algorithm
// - declare array `lengths` and initialize to [a, b, c]
// - Sort array by increasing size
// 1. Eliminate invalid 0-side triangles first:
// - If lengths array includes 0, return "invalid"
// 2. Identify equilateral triangle:
// - If a = b = c, return "equilateral"
// 3. Eliminate second invalid triangle:
// - If lengths[0] + lengths[1] < lengths[2], return "invalid"
// 4. Identify scalene triangle:
// - If a != b && a != c && b != c, return "scalene"
// 5. If neither of the above conditions hold, the remaining must be isosceles:
// - return "isosceles"

function triangle(a, b, c) {
  let lengths = [a, b, c].sort((a, b) => a - b);

  if (lengths.includes(0)) return "invalid";
  if (a === b && b === c) return "equilateral";
  if (lengths[0] + lengths[1] < lengths[2]) return "invalid";
  if (a !== b && a !== c && b !== c) return "scalene";
  return "isosceles";
}

console.log(triangle(3, 3, 3) === "equilateral");
console.log(triangle(3, 3, 1.5) === "isosceles");
console.log(triangle(3, 4, 5) === "scalene");
console.log(triangle(0, 3, 3) === "invalid");
console.log(triangle(3, 1, 1) === "invalid");
