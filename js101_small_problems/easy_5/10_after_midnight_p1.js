// The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

// You may not use javascript's Date class methods.

// PEDAC
// Input: positive or negative integer
// Output: String representing time of day in 24 h format

// Rules
// - Positive input number = minutes after midnight
// - Negative input number = minutes before midnight
// - Output as string
// - function must return output (not print)

// Algorithm
// Midnight can be represented as 24h = 1440 minutes
// If input > 0, time is input minutes
// If input is < 0, time is 1440 - input minutes
// convert time to hours and minutes
// - hours = time / 60, floored
// - minutes = time / 60 - hours
// Return string with "HH:mm"

function timeOfDay(numTime) {
  let midnight = 24 * 60;
  let posTime = numTime % midnight;

  if (numTime < 0) {
    posTime = midnight + (numTime % midnight);
  }

  let hours = Math.floor(posTime / 60).toString();
  let minutes = Math.round(posTime - hours * 60).toString();

  let timeString = `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
  return timeString;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
// The tests above should log true.

// Disregard Daylight Savings and Standard Time and other complications.
