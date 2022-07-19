// In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. In a language that is not optimized for recursion, some (but not all) recursive functions can be extremely slow and may require massive quantities of memory and/or stack space. If you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.

// Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

// Rewrite your recursive fibonacci function so that it computes its results without using recursion.

// Note that JavaScript can accurately compute integers up to 16 digits long; this means that fibonacci(78) is the largest Fibonacci number that you can accurately compute with simple operations in JavaScript.

// Solution 1
// Build array of fibonacci numbers, return the last number

function fibonacci(n) {
  if (n < 3) return 1;

  let fibArr = [1, 1];

  while (fibArr.length < n) {
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
  }
  return fibArr[fibArr.length - 1];
}

console.log("\nSolution 1\n----------");
console.log(fibonacci(20) === 6765);
console.log(fibonacci(50) === 12586269025);
console.log(fibonacci(75) === 2111485077978050);

// Solution 2
// Update array and fibonacci number for each iteration, return fib.num.

function fibonacci2(n) {
  let fib = 1;
  let fibArr = [1, 1];

  for (let i = 0; i < n - 2; i++) {
    fib = fibArr[0] + fibArr[1];
    fibArr[0] = fibArr[1];
    fibArr[1] = fib;
  }

  return fib;
}

console.log("\nSolution 2\n----------");
console.log(fibonacci2(20) === 6765);
console.log(fibonacci2(50) === 12586269025);
console.log(fibonacci2(75) === 2111485077978050);
