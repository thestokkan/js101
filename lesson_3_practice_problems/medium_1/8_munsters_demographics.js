// Question 8
//
// One day, Spot was playing with the Munster family's home computer, and he wrote a small program to mess with their demographic data:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

// After writing this function, he typed the following code:

messWithDemographics(munsters);
console.log(munsters);

// Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the family's data get ransacked? Why or why not?

// Answer:
// Yes, the family's data got changed.
// Objects are mutable and are passed by reference to functionr. They can therefore be changed from within a function body.
// In this case, the `forEach` loop is accessing the values of the `munsters` object, which themselves are objects. Index assignment mutates the original object and the `munsters` object is therefore changed.