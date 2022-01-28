// Question 1
//
// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

// 1
numbers.length = 0;
console.log(numbers);

// 2
numbers = [1, 2, 3, 4];

while (numbers.length) {
  numbers.pop();
}

console.log(numbers);

// 3
numbers = [1, 2, 3, 4];

numbers.splice(0,4);
console.log(numbers);