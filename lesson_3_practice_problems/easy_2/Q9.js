// Question 9
//
// Back in the stone age (before CSS), we used spaces to align things on the screen.
// If we have a 40-character wide table of Flintstone family members, how can we
// center the following title above the table with spaces?

let title = "Flintstone Family Members";
const tableWidth = 40;
let padding = Math.floor((tableWidth - title.length) / 2);

let paddedTitle = title.padStart(padding + title.length);

console.log(paddedTitle);