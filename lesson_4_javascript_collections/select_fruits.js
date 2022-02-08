let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};



function selectFruit(obj) {
  let
  keys = Object.keys(obj);
  let fruit = {};

  keys.forEach(key => {
    if (obj[key] === "Fruit") {
      fruit[key] = obj[key];
    }
  });

  return fruit;
}


console.log(selectFruit(produce));; // => { apple: 'Fruit', pear: 'Fruit' }