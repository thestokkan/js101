// One of the most frequently used real-world string operations is that of "string substitution," where we take a hard-coded string and modify it with various parameters from our program.

// Given this previously seen family object, print the name, age, and gender of each family member:

let munsters = {
  herman: { age: 32, gender: "male" },
  lily: { age: 30, gender: "female" },
  grandpa: { age: 402, gender: "male" },
  eddie: { age: 10, gender: "male" },
  marilyn: { age: 23, gender: "female" },
};

// Each output line should follow this pattern:
// (Name) is a (age)-year-old (male or female).

for (member in munsters) {
  let age = munsters[member].age;
  let gender = munsters[member].gender;

  console.log(`${member} is a ${age}-year-old ${gender}.`);
}

// Alternatively
Object.entries(munsters).forEach((entry) => {
  let name = entry[0];
  let age = entry[1]["age"];
  let gender = entry[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
});
