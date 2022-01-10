// START
//
// // Given two arrays of numbers, array1 and array2
//
// SET newArray = []
// SET index1 = 0
// SET index2 = 0
//
// WHILE index2 <= length of array2
//   newArray[index2] = array1[index1]
//   newArray[index2 + 1] = array2[index1]
//   index1 += 1
//   index2 += 2
//
// RETURN newArray
//
// END

function merge(array1, array2) {
  let newArray = [];
  let i2 = 0;

  for (let i1 = 0; i1 < array2.length; i1++) {
    newArray[i2] = array1[i1];
    newArray[i2 + 1] = array2[i1];
    i2 += 2;
  }
  return newArray;
}

console.log(merge([1, 2, 3], [4, 5, 6]));