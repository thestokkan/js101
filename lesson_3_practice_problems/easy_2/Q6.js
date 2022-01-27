// Question 6
//
// Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:

["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Nesting data structures like we do here is commonplace in JavaScript and
// programming in general. We'll explore this in much greater depth in a future Lesson.
//
// Create a new array that contains all of the above values, but in an un-nested format:

// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

// With flat()
let flat1 = flintstones.flat();
console.log(flat1);

// With forEach and concat()
let flat2 = [];

flintstones.forEach(el => {
  flat2 = flat2.concat(el);
})

console.log(flat2);

// With concat()
let flat3 = [].concat(...arr);
console.log(flat3);