// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

// Example Output:

// Teddy is 69 years old!

let age = 1;

while (age < 20) {
  age = Math.floor(Math.random() * 120);
}

console.log(`Teddy is ${age} years old!`);
