// Some people believe that Fridays that fall on the 13th day of the month are unlucky days. Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.

// Alogrithm:
// Initialize a counter variable to 0
// Loop through the months of input year
// If the 13th of that month is a Friday (day number 5 in the Date object), update counter by 1
// Return (or log) counter

function fridayThe13ths(year) {
  let count = 0;

  for (let m = 1; m <= 12; m++) {
    let thirteenth = new Date(`${year}-${m.toString().padStart(2, 0)}-13`);

    if (thirteenth.getDay() === 5) count += 1;
  }
  console.log(count);
}

fridayThe13ths(1986); // 1
fridayThe13ths(2015); // 3
fridayThe13ths(2017); // 2
