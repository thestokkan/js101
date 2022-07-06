// Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

// Examples:

// century(2000);        // "20th"
// century(2001);        // "21st"
// century(1965);        // "20th"
// century(256);         // "3rd"
// century(5);           // "1st"
// century(10103);       // "102nd"
// century(1052);        // "11th"
// century(1127);        // "12th"
// century(11201);       // "113th"

// PEDAC
// Input: Year
// Output: string

// Explicit rules
// - The return value is a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number (e.g. "20th")
// - New centuries begin with 01 (e.g. 1901 - 2000 is the 20th century)

// Assumptions
// - Input is a positive integer (valid year)

// Questions
// - Should the function be able to handle all possible years/centuries? - assume yes

// Algorithm
// Check which century the year belongs in
// - Figure out rule(s) to determine century

// 1001 - 1100 =>  11
// 1801 - 1900 => 19
// 1901 - 2000 =>  20
// 23001 - 23100 =>  231

// - Divide by 100, then round up (ceil)

// Determine suffix appropriate for century number
// - Figure out rules to determine suffix
// Concatenate and print century number and suffix

function numSuffix(num) {
  if (num.toString().slice(-2, -1) === "1") {
    return "th";
  } else {
    switch (num.toString().slice(-1)) {
      case "1":
        return "st";
      case "2":
        return "nd";
      case "3":
        return "rd";
      default:
        return "th";
    }
  }
}

function century(year) {
  let century = Math.ceil(year / 100);
  let suffix = numSuffix(century);

  console.log(century + suffix);
}

century(2000); // "20th"
century(2001); // "21st"
century(1965); // "20th"
century(256); // "3rd"
century(5); // "1st"
century(10103); // "102nd"
century(1052); // "11th"
century(1127); // "12th"
century(11201); // "113th"
