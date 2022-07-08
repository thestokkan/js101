// Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

// Examples:

// Copy Code
// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"
// Note: your results may differ slightly depending on how you round values, but should generally be within a second or two of the results shown.

// PEDAC
// Input: Floating point number between 0 and 360 (degree angle)
// Output: String representing angle in degrees, minutes, and seconds

// Rules:
// Output formatting: degrees°minutes'seconds" (e.g. 254°35'59")
// - No spaces
// - minutes and seconds always have two digits
// 1 degree = 60 minutes
// 1 minute = 60 seconds

// Algorithm
// Given number of degrees as a floating point number, degFloat
// Extract whole number of degrees and save to variable
// - Round down to nearest whole number to get degrees
// - subtract whole number of degrees from input number to get remainder
// Convert remainder to minutes, extract whole number of minutes and save to variable
// - Multiply remainder by 60 to get decimal minutes
// - Round down to nearest whole number to get minutes
// - front-pad number with 0 if it has less than 2 digits
// - subtract whole number of minutes from decimal number to get remainder
// Convert remainder to seconds and save to variable
// - Multiply remainder by 60
// - front-pad number with 0 if it has less than 2 digits
// Concatenate degrees, minutes, and seconds into string according to output formatting.
// Log string to console

function dms(degFloat) {
  let deg = Math.floor(degFloat);

  let minFloat = (degFloat - deg) * 60;
  let min = Math.floor(minFloat);
  min = min.toString().padStart(2, "0");

  let sec = Math.round((minFloat - min) * 60);
  sec = sec.toString().padStart(2, "0");

  console.log(`${deg}°${min}'${sec}"`);
}

dms(30); // 30°00'00"
dms(76.73); // 76°43'48"
dms(254.6); // 254°35'59"
dms(93.034773); // 93°02'05"
dms(0); // 0°00'00"
dms(360); // 360°00'00" or 0°00'00"
