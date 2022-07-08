// As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

// You may not use javascript's Date class methods.

function afterMidnight(timeString) {
  let [hours, minutes] = timeString.split(":");
  let timeNumber = Number(hours) * 60 + Number(minutes);
  timeNumber = timeNumber % 1440;

  return timeNumber;
}

function beforeMidnight(timeString) {
  let [hours, minutes] = timeString.split(":");
  let timeNumber = Number(hours) * 60 + Number(minutes);
  timeNumber = Math.abs(1440 - timeNumber) % 1440;

  return timeNumber;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
// The tests above should log true.

// Disregard Daylight Savings and Standard Time and other irregularities.
