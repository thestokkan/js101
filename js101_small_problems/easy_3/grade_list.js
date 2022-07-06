// Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

// Examples:

// Copy Code
// getGrade(95, 90, 93);    // "A"
// getGrade(50, 50, 95);    // "D"

// PEDAC
// Input: three numerical scores
// Output: average of input scores, converted to letter grade

// Rules: input values are between 0 and 100 (no need to check)

// Create function that converts numerical score to letter grade
// Create function to calculate average score
// - Calculate numerical average of input
// - Convert average score to letter grade using sub function
// - Return letter grade

function convertScore(score) {
  if (score < 60) {
    return "F";
  } else if (score < 70) {
    return "D";
  } else if (score < 80) {
    return "C";
  } else if (score < 90) {
    return "B";
  } else if (score <= 100) {
    return "A";
  } else {
    return "Not a valid score";
  }
}

function getGrade(score1, score2, score3) {
  let meanScore = (score1 + score2 + score3) / 3;
  console.log(meanScore);

  let grade = convertScore(meanScore);
  console.log(grade);
}

getGrade(95, 90, 93); // A
getGrade(50, 50, 95); // D
getGrade(72, 80, 78); // C
getGrade(92, 80, 82); // B
getGrade(67, 71, 85); // C
getGrade(0, 0, 0); // F
getGrade(100, 100, 100); // A
getGrade(110, 105, 101); // Not a valid score
