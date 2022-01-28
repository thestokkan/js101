# Question 5

What will the following two lines of code output?


```javascript
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);
```
## Answer
Expected output:
0.9
true

Actual output:
0.8999999999999999
false

Explanation:
JavaScript uses floating point numbers for calculations and the floating point representation lacks a certain amount of precision.

#Question 6

What do you think the following code will output?


```javascript
let nanArray = [NaN];

console.log(nanArray[0] === NaN);
```

## Answer
Expected output: false

Explanation: In JavaScript, `NaN === NaN` returns `false`.
NaN -- not a number -- is a special numeric value that indicates that an operation that was intended to return a number failed. JavaScript doesn't let you use == and === to determine whether a value is NaN.

## Bonus: How can you reliably test if a value is NaN?

```javascript
Number.isNaN(nanArray[0]);
```

# Question 7

What is the output of the following code?


```javascript
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);
```

## Answer
Expected output:
34