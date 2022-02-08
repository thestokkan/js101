# Practice Problem 1

What is the return value of the filter method call below? Why?

```javascript
[1, 2, 3].filter(num => 'hi');
```

## Answer
Return value: `[1, 2, 3]`

Why: `filter` adds the current element to the returned array if the returned value of the callback is truthy. In this case, the return value of the callback is always `'hi'`. Since a non-empty string is a truthy value, all the elements in the array will be selected and a copy of the calling array is returned.

# Practice Problem 2

What is the return value of `map` in the following code? Why?

```javascript
[1, 2, 3].map(num => {
  num * num;
});
```

## Answer
Return value: `[undefined, undefined, undefined]`

Why: `map` returns a new array with the return value of the callback function for each iteration. Since there is no `return` statement in the multi-line callback function, the function returns its default value of `undefined` for each iteration.

# Practice Problem 3

The following code differs slightly from the above code. What is the return value of map in this case? Why?


```javascript
[1, 2, 3].map(num => num * num);
```

## Answer
Return value: `[1, 4, 9]`

Why: The callback is an one-line arrow function without braces, which implicitly returns the value of the expression within the function body.

# Practice Problem 4

What is the return value of the following statement? Why?

```javascript
['ant', 'bear', 'caterpillar'].pop().length;
```

## Answer
Return value: `11`

Why: `pop` removes the last element of an array and returns that element. Since `length` is called on the return value of `pop`, which is `caterpillar`, the expression returns the length of that word.

# Practice Problem 5

What is the callback's return value in the following code? Also, what is the return value of `every` in this code?

```javascript
[1, 2, 3].every(num => {
  return num = num * 2;
});
```

## Answer
Return value of callback:
`2`
`4`
`6`
Return value of `every`: `true`

Why: `every` returns `true` if the callback returns a truthy value for every iteration.

# Practice Problem 6

How does Array.prototype.fill work? Is it destructive? How can we find out?

```javascript
let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);
```

# Answer
How to find out: Look it up in the MDN JavaScript documentation, play around in the console.

`Array.prototype.fill` destructively changes all the elements in an array to a specified value and returns the modified array. If the optional `startIndex` is provided, it will change all elements from this index to the end. If the optional `endIndex` is also provided, it will change all the elements from `startIndex` up until (but not including) `endIndex`.

`fill` will not create new slots, only *fill* existing ones.

In the above snippet, the value is `1`, `startIndex` is `1` and `endIndex` is `5`. The return value is `[1, 1, 1, 1, 1]`

# Practice Problem 7

What is the return value of map in the following code? Why?

```javascript
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});
```

## Answer
Return value: `[undefined, 'bear']`

Why: `map` returns a new array with the return value of the callback function for each iteration, no matter its value. In the above snippet, the first iteration returns `undefined` since the condition in the `if` statement is falsy and no explicit value is returned. The second iteration returns the current element since, this time, the condition is truthy and the element is explicitly returned.