// Game overview:
// - 2-player game
// - 3 x 3 grid
// - Each player takes a turn marking a square
// - The first player to get 3 in a row in either direction, wins
// - If the board fills up and neither player has 3 in a row, it's a tie

// Sequence of gameplay (high-level algorithm):
// 1. Display empty board
// 2. Ask player to mark a sqare
// 3. Computer marks a square
// 4. Display the updated board
// 5. If it's a winning board, display the winner
// 6. If the board is full, display a tie
// 7. If neither winning board or full, go to #2
// 8. Play again?
// 9. If yes, go to #1
// 10. If no, quit

// In detail:
// 1. Set up and display the board
//    - Create a board using horizontal and vertical lines
//      - line

let read = require("readline-sync");
const INITIAL_MARKER = " ";
const PLAYER_MARKER = "X";
const COMPUTER_MARKER = "O";

function displayBoard(board) {
  console.clear();
  
  console.log("");
  console.log(" _______ _______ _______ ");
  console.log("|       |       |       |");
  console.log(`|   ${board["1"]}   |   ${board["2"]}   |   ${board["3"]}   |`);
  console.log("|_______|_______|_______|");
  console.log("|       |       |       |");
  console.log(`|   ${board["4"]}   |   ${board["5"]}   |   ${board["6"]}   |`);
  console.log("|_______|_______|_______|");
  console.log("|       |       |       |");
  console.log(`|   ${board["7"]}   |   ${board["8"]}   |   ${board["9"]}   |`);
  console.log("|_______|_______|_______|");
  console.log("");
}

function newBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[square] = INITIAL_MARKER;
  }
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    square = read
      .question(`Pick a square (${emptySquares(board).join(",")}): `)
      .trim();

    if (emptySquares(board).includes(square)) break;

    console.log("Invalid input, try again.");
  }
  board[square] = PLAYER_MARKER;
}

function computerChoosesSquare(board) {
  randIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randIndex];

  board[square] = COMPUTER_MARKER;
}

function fullBoard(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return false;
}

// Let the game begin!
console.log("\nWelcome to Tic Tac Toe!");

// Outer loop
while (true) {
  console.log("\nLet's play!");
  let board = newBoard();
  displayBoard(board);

  // Inner loop
  while (true) {
    playerChoosesSquare(board);
    computerChoosesSquare(board);
    displayBoard(board);

    if (someoneWon(board) || fullBoard(board)) break;
  }

  let answer = read.question("Do you want to play again (y/n)? ");

  if (!["y", "Y"].includes(answer)) break;
}

console.log("Thanks for playing!");
