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
const GAMES_TO_WIN = 3;

function displayBoard(board) {
  console.log(`You are ${PLAYER_MARKER}, computer is ${COMPUTER_MARKER}`);

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

function joinOr(list, sep = ", ", conjunction = "or") {
  switch (list.length) {
    case 0:
      return "";
    case 1:
      return list[0];
    case 2:
      return list.join(` ${conjunction} `);
    default:
      return (
        list.slice(0, list.length - 1).join(sep) +
        ` ${conjunction} ${list[list.length - 1]}`
      );
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    square = read
      .question(`Pick a square (${joinOr(emptySquares(board))}): `)
      .trim();
    console.log("\n\n");

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
  return !!detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  // Loop through winningLines array
  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (board[sq1] === board[sq2] && board[sq2] === board[sq3]) {
      if (board[sq1] === PLAYER_MARKER) return "Player";
      if (board[sq1] === COMPUTER_MARKER) return "Computer";
    }
  }

  return null;
}

function updateScore(score, winner) {
  score[winner] += 1;
}

function displayScore(score) {
  console.log("\nCurrent score:");
  console.log(`Player: ${score.Player}`);
  console.log(`Computer: ${score.Computer}`);
}

function displayRound(round) {
  console.log("____________\n");
  console.log(`Round ${round}`);
  console.log("____________\n");
}

// Let the game begin!
console.log("Welcome to Tic Tac Toe!");
// Match loop
while (true) {
  console.log("Let's play best of 5 games!");
  let score = { Player: 0, Computer: 0 };
  let round = 1;

  // Game outer loop
  while (true) {
    let board = newBoard();
    displayRound(round);

    // Game inner loop
    while (true) {
      displayBoard(board);

      playerChoosesSquare(board);
      if (someoneWon(board)) break;

      computerChoosesSquare(board);
      if (someoneWon(board) || fullBoard(board)) break;
    }

    round += 1;
    displayBoard(board);

    if (someoneWon(board)) {
      let winner = detectWinner(board);
      updateScore(score, winner);
      console.log(`${winner} won the game!`);
    } else {
      console.log("It's a tie!");
    }

    displayScore(score);

    if (Object.values(score).includes(GAMES_TO_WIN)) break;
  }

  if (score.Player === GAMES_TO_WIN) {
    console.log("\nCONGRATULATIONS, YOU ARE THE MATCH WINNER!");
  } else if (score.Computer === GAMES_TO_WIN) {
    console.log("\nCOMPUTER IS THE MATCH WINNER!");
  }

  let answer = read.question("\nDo you want to play again (y/n)? ").trim();
  if (answer.toLowerCase() !== "y") break;
}

console.log("\nThanks for playing!");
