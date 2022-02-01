# Question 1

Will the following functions return the same results?

```javascript
function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there";
  }
}

console.log(first());
console.log(second());
```

Try to answer without running the code or looking at the solution.

## Answer

No.
`first()` will return `{prop1: "hi there"}`, `second()` will return `undefined` since there is nothing directly following the `return` keyword. The value of the `return` statements must appear on the same line as the `return` keyword.

## Solution
Explanation: *Semicolons* are optional, but JavaScript will insert them at runtime where the program thinks they should be. In this case, a semicolon is inserted after `return` in the `second()` function, so the function just returns `undefined` and ignores the rest of the code in the function body.

NOTE: use linter (alt + ctrl + F) to see this in action, it will insert the "missing" semicolon.


# Question 2

What does the last line in the following code output?

```javascript
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);
```

Try to answer without running the code or looking at the solution.

## Answer
Expected output: { first: [1, 2] }

`numArray` is assigned a *copy of the reference* to `object["first"]`. Mutating changes made via `numArray` will therefore be reflected in `object`.


# Question 3

Given the following similar sets of code, what will each code snippet print?

A)

```javascript
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

B)

```javascript
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

C)

```javascript
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

## Answer

A)
Expected output:  
"one is: one"
"two is: two"
"three is: three"

Re-assigning a function parameter does not affect the outer scope variable.

B)
Expected output:  
"one is: one"
"two is: two"
"three is: three"

Re-assigning a function parameter does not affect the outer scope variable.o

C)
Expected output:  
"one is: two"
"two is: three"
"three is: one"

Mutating an object via a function parameter will change the original object and will therefore be reflected in the outer scope variable.
