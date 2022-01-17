let name = "Bob";

function newName() {
  let name = "Jane"; // Variable declaration within function scope
  return name;
}

// The function creates its own scope and can therefore declare a new variable
// with the same name as the one in the outer scope. The function scoped
// variable shadows the outer scope variable.

console.log(newName()); // 'Jane'
console.log(name); // 'Bob'

function reName() {
  name = "Elaine"; // Re-assignment of outer scope variable
}

// let name = "Andy"; // SyntaxError: Identifier 'name' has already been declared
// NB! The above line will halt the program before it runs!
// A SyntaxError cannot be caught.


reName();
console.log(name); // 'Elaine'
// NB! The syntax error thrown by the code on line 17 will halt the program
// before it runs.

function wontWork() {
  console.log(name); // ReferenceError: Cannot access 'name' before initialization
  let name = "Mandy";
  return name;
}

try {
  wontWork();
} catch (error) {
  console.log("ReferenceError: Cannot access 'name' before initialization");
}
// the wontWork() function creates its own scope.
// Since it declares a variable with the same name as one in the outer scope,
// this inner scope variable shadows the outer scope one even before any
// line of code is run.
// The scope of the variable is the entire function body, including the first
// line that tries to log the variable before it is declared within the scope.

try {
  let name = 'Kelly';
  console.log(name);
} catch (error) {
  console.log("This will not run");
}
// The `try` block creates its own scope!

console.log("End of program");