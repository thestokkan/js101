// Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: "fruit", colors: ["red", "green"], size: "small" },
  carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
  apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
  apricot: { type: "fruit", colors: ["orange"], size: "medium" },
  marrow: { type: "vegetable", colors: ["green"], size: "large" },
};

let capitalize = (word) => word[0].toUpperCase() + word.slice(1);

let results = Object.values(obj).map((produce) => {
  if (produce.type === "fruit") {
    return produce.colors.map((color) => capitalize(color));
  } else {
    return produce.size.toUpperCase();
  }
});

console.log(results);

// The return value should look like this:

// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
