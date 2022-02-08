// Exclusive Or
//
// The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one, but not both, of two conditions to be truthy: the so-called exclusive or.
//
// In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.


function xor(a, b) {
  return !!((a || b) && !(a && b));
}

// Examples:

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);


// Further Exploration
//
// Can you think of a situation in which a boolean xor function would be useful? Suppose you were modeling a light at the top of a flight of stairs wired in such a way that the light can be turned on or off using either the switch at the bottom of the stairs or the switch at the top of the stairs. This is an xor configuration, and it can be modeled in JavaScript using the xor function. Think of some additional examples.

// Answer
// - Traffic ligths
// - Anything else that is either 'on' or 'off'



// || and && are so-called short circuit operators in that the second operand is not evaluated if its value is not needed. Does the xor function perform short-circuit evaluation of its operands? Why or why not? Does short-circuit evaluation in xor operations even make sense?

// Answer
// Yes, the 'or' part of the evaluation is short-circuited