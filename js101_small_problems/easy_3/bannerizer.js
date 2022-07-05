// Input: Text string of arbitrary length
// Output: Log the text string inside a box
// Text box and text:
// - First line: '+' + ('-' x (length of text + 2)) + '+'
// - Second line: '|' + (' ' x (length of text + 2)) + '|'
// - Third line: '| ' + text + ' |'
// - Fourth line: same as second
// - Fifth line: same as first
// Assumption: Output fits within browser window

// 1. Get length of text
// 2. Declare variable for dashed line (first and fifth)
// 3. Declare variable for blank space line (second and fourth)
// 4. Declare variable for text line (third)
// Log lines to the console (dashed, blank, text, blank, dashed)

function createLine(text, corner, repeat) {
  let newLine = corner;
  for (let index = 0; index < text.length + 2; index++) {
    newLine = newLine.concat(repeat);
  }
  newLine = newLine.concat(corner)
  return newLine;
}

function logInBox(text) {
  console.log(createLine(text, '+', '-'));  
  console.log(createLine(text, '|', ' '));
  console.log(`| ${text} |`);
  console.log(createLine(text, '|', ' '));  
  console.log(createLine(text, '+', '-'));  
}

logInBox('To boldly go where no one has gone before.');
logInBox('');