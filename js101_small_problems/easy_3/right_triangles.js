// Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

// PEDAC
// Input: Positive integer, n
// Output: right triangle where each right edge has n stars and the hypothenus runs from lower left to upper right.

function triangle(n) {
  let counter = 1;

  while (counter < n) {
    console.log('*'.repeat(counter).padStart(n));
    counter ++;
  }
}

triangle(5);
triangle(10);