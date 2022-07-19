// Our recursive fibonacci function from an earlier exercise isn't very efficient. It starts slowing down with an nth argument value as low as 35. One way to improve the performance of our recursive fibonacci function (and other recursive functions) is to use memoization.

// Memoization is an approach that involves saving a computed answer for future reuse, instead of computing it from scratch every time it is needed. In the case of our recursive fibonacci function, using memoization saves calls to fibonacci(nth - 2) because the necessary values have already been computed by the recursive calls to fibonacci(nth - 1).

// For this exercise, your objective is to refactor the recursive fibonacci function to use memoization.

function fibMemo(n, fibNums = {}) {
  if (n in fibNums) return fibNums[n];
  if (n <= 2) return 1;

  fibNums[n] = fibMemo(n - 1, fibNums) + fibMemo(n - 2, fibNums);
  return fibNums[n];
}

console.log(fibMemo(1)); // 1
console.log(fibMemo(2)); // 1
console.log(fibMemo(3)); // 2
console.log(fibMemo(4)); // 3
console.log(fibMemo(5)); // 5
console.log(fibMemo(6)); // 8
console.log(fibMemo(12)); // 144
console.log(fibMemo(20)); // 6765
console.log(fibMemo(50)); // 12586269025
