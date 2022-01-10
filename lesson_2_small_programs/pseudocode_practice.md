Write out pseudocode (both casual and formal) that does the following:

* a function that returns the sum of two numbers

Informal:
Given two numbers.
- Add the numbers
- Return the sum

Formal:
START
// Given two numbers

SET sum = number1 + number2

RETURN sum

END

* a function that takes an array of strings, and returns a string that is all those strings concatenated together

Informal:
In: Array of strings
Out: String of concatenated values from array
Q: What delimeter? -> Use none here

Given an array of strings.
- Create a new string variable containing an empty string
- For each string in the array
  - Append the current string to the string variable
- Return the string variable

Formal:
START

// Given an array of strings

SET string = ""
SET iterator = 0

WHILE iterator < length of array
  string += array[iterator]
  iterator += 1

RETURN string

END

* a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element.

For instance:
`everyOther([1,4,7,2,5]); // => [1,7,5]`

Informal:
In: Array of integers
Out: New array with every other element from original array

Given an array of integers.
- Create an empty array
- Set iterator = 0
- Loop through the array of integers
  - While the iterator is less than or equal to the length of the array - 1
    - Add the current element to the new array
    - Increment the iterator by 2
- Return the new array

Formal:
START

// Given an array of integers

SET newArray = []
SET iterator = 0

WHILE iterator < length of original array
  newArray << array[iterator]
  iterator += 2

RETURN newArray

END

* a function that determines the index of the 3rd occurrence of a given character in a string.
For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null.

Informal:
In: String and character
Out: Integer (index of 3rd occurrence of character in string) OR `null`

Given a string and character
- Save the characters in the string in an array
- Set a counter variable = 0
- Set characterIndex variable
- Count the number of times the character occurs in the string:
  - For each character in the array
    - If the current character is equal to the given character
      - Update the counter by 1
      - If the counter is at least 3
        - Update the characterIndex variable with the index of the current variable
        - Break
-

Formal:
START

// Given a string and a character

SET charArray = array of characters in string
SET numberOfOccurrences = 0
SET characterIndex

FOR each element in charArray
  IF current character == character
    numberOfOccurrences += 1

  IF numberOfOccurrences >= 3
    characterIndex = index of current character
    BREAK out of loop

RETURN characterIndex OR `null`

END

* a function that takes two arrays of numbers and returns the result of merging the arrays.
The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. For instance:

`merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]`

You may assume that both array arguments have the same number of elements.

Informal:
In: two arrays of numbers
Out: one array merged from the two input arrays
  - elements of first array at even indices
  - elements of second array at odd indices

Given two arrays of numbers:
- Create a function that takes two arguments, array1 and array2
  - Set a variable newArray to an empty array
  - Set an index variable i1 to 0
  - Set an index variable i2 to 0
  - For the length of array2
    - newArray[i2] = array1[i1]
    - newArray[i2 + 1] = array2[i1]
    - Increment i1 by 1
    - Increament i2 by 2
  - Return newArray

Formal:

START

// Given two arrays of numbers, array1 and array2

SET newArray = []
SET index1 = 0
SET index2 = 0

WHILE index2 < length of array2
  newArray[index2] = array1[index1]
  newArray[index2 + 1] = array2[index1]
  index1 += 1
  index2 += 2

RETURN newArray

END