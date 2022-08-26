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

let read = require("readline-sync");

const FIRST_PLAYER = "choose";
const INITIAL_MARKER = " ";
const PLAYER_MARKER = "X";
const COMPUTER_MARKER = "O";
const GAMES_TO_WIN = 3;
const CENTER_SQUARE = 5;
const MAX_MARKERS_BEFORE_WIN = 2;
const WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function newBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[square] = INITIAL_MARKER;
  }
  return board;
}

function displayBoard(board, round, score) {
  console.clear();

  displayRound(round);
  displayScore(score);
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

function findBestSquare(board, marker) {
  for (let idx = 0; idx < WINNING_LINES.length; idx++) {
    let line = WINNING_LINES[idx];
    let markersInLine = line.map((square) => board[square]);

    if (
      markersInLine.filter((val) => val === marker).length ===
      MAX_MARKERS_BEFORE_WIN
    ) {
      let unusedSquare = line.find(
        (square) => board[square] === INITIAL_MARKER
      );
      if (unusedSquare !== undefined) return unusedSquare;
    }
  }
  return null;
}

function computerChoosesSquare(board) {
  let square;
  let offenseSquare = findBestSquare(board, COMPUTER_MARKER);
  let defenseSquare = findBestSquare(board, PLAYER_MARKER);

  if (offenseSquare) {
    square = offenseSquare;
  } else if (defenseSquare) {
    square = defenseSquare;
  } else if (board[CENTER_SQUARE] === INITIAL_MARKER) {
    square = CENTER_SQUARE;
  } else {
    let randIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function fullBoard(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  let winner;

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (board[sq1] === board[sq2] && board[sq2] === board[sq3]) {
      if (board[sq1] === PLAYER_MARKER) winner = "Player";
      if (board[sq1] === COMPUTER_MARKER) winner = "Computer";
    }
  }
  return winner;
}

function updateScore(score, winner) {
  score[winner] += 1;
}

function displayScore(score) {
  console.log(`Player: ${score.Player}    Computer: ${score.Computer}`);
}

function displayRound(round) {
  console.log("\n-------");
  console.log(`Round ${round}`);
  console.log("-------");
}

function getFirstPlayer() {
  if (FIRST_PLAYER === "Player") return "Player";
  if (FIRST_PLAYER === "Computer") return "Computer";

  while (true) {
    let answer = read.question(
      "Who shall go first, 1) player or 2) computer?\n"
    );
    if (answer === "1") return "Player";
    if (answer === "2") return "Computer";

    console.log("Invalid input");
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === "Player") return "Computer";
  return "Player";
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === "Player") {
    playerChoosesSquare(board);
  } else if (currentPlayer === "Computer") {
    computerChoosesSquare(board);
  }
}

function someoneWonMatch(score) {
  return Object.values(score).includes(GAMES_TO_WIN);
}

function displayMatchScore(score) {
  if (score.Player === GAMES_TO_WIN) {
    console.log("CONGRATULATIONS, YOU ARE THE MATCH WINNER!");
  } else if (score.Computer === GAMES_TO_WIN) {
    console.log("COMPUTER IS THE MATCH WINNER!");
  }

  console.log("\nFINAL SCORE:");
  displayScore(score);
}

// Match loop
while (true) {
  console.clear();
  console.log("Welcome to Tic Tac Toe!");
  console.log("Let's play best of 5 games!\n");
  let score = { Player: 0, Computer: 0 };
  let currentPlayer = getFirstPlayer();
  let round = 1;

  console.log(`${currentPlayer} begins.`);

  // Game outer loop
  while (true) {
    let board = newBoard();

    // Game inner loop
    while (true) {
      displayBoard(board, round, score);

      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || fullBoard(board)) break;
    }

    if (someoneWon(board)) {
      let winner = detectWinner(board);
      updateScore(score, winner);
      displayBoard(board, round, score);
      console.log(`${winner} won round ${round}!`);
    } else {
      console.log("It's a tie!");
    }

    round += 1;
    read.question("\nPress any key to continue ");

    if (someoneWonMatch(score)) {
      console.clear();
      displayBoard(board, round, score);
      displayMatchScore(score);
      break;
    }
  }

  let answer;
  while (true) {
    answer = read.question("\nDo you want to play again (y/n)? ");
    if (["y", "yes", "n", "no"].includes(answer.toLowerCase())) break;
    console.log("Incorrect input.");
  }
  if (["n", "no"].includes(answer.toLowerCase())) break;
}

console.log("\nThanks for playing!");
