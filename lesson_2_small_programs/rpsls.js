// BONUS FEATURES:
// 1. Add Lizard and Spock to your game
// 2. Best of 5
//  Keep score of the player's and computer's wins. When either
//  the player or computer reaches three wins, the match is over, and the
//  winning player becomes the grand winner. Don't add your incrementing logic
//  to displayWinner. Keep your functions simple; they should perform one
//  logical task — no more, no less.

// PEDAC
//
// UNDERSTAND THE PROBLEM
// - Input: Choices from user and computer
// - Output: Round winner and grand winner (best of 5 rounds)
// - Requirements
//   - Explicit:
//    Rules of the game:
//    1. Rock beats Scissors and Lizard
//    2. Scissors beat Paper and Lizard
//    3. Paper beats Rock and Spock
//    4. Lizard beats Paper and Spock
//    5. Spock beats Rock and Scissors
//    6. If both players choose the same item, neither player wins. It's A tie.
//
// ALGORITHM
//
// 1. Welcome the player to the game
//    - Ask for name (validation loop)
//      - Save in object
// 2. Start the game (game loop)
//    1. Ask to choose rock, paper, or scissors (validation loop)
//      - Save in object
//    2. Determine randomized computer choice
//      - Save in object
//    3. Determine result based on player and computer choices (see rules)
//       -
//    4. Display round result
//    5. Repeat 2.1-2.4 until best of 5 can be determined
//    6. Display grand winner (best of 5 rounds)
// 3. Ask for another game
//      - If yes, continue
//      - If no, exit main loop and display goodbye message
// CODE

const read = require("readline-sync");
const os = require("os");
const computer = os.hostname();
let player = "";

// Helper functions

function prompt(message) {
  console.log(`>>> ${message}`);
}

function choiceToWords(choice) {
  switch (choice) {
    case "r":
      return "Rock";
    case "p":
      return "Paper";
    case "s":
      return "Scissors";
    case "l":
      return "Lizard";
    case "S":
      return "Spock";
  }
  return "Not valid";
}

function displayChoices() {
  console.log(" r) Rock\n p) Paper\n s) Scissors\n l) Lizard\n S) Spock");
}
function getPlayerChoice() {
  prompt("Make your choice:");
  displayChoices();
  let playerChoiceNum = read.question("");

  while (!["r", "p", "s", "l", "S"].includes(playerChoiceNum)) {
    prompt("Invalid input, please choose one of the below letters:");
    displayChoices();
    playerChoiceNum = read.question("");
  }

  return choiceToWords(playerChoiceNum);
}

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getComputerChoice() {
  return getRandom(["Rock", "Paper", "Scissors", "Lizard", "Spock"]);
}

function choicesIncludes(choices, handA, handB, handC) {
  return (
    choices.includes(handA) &&
    (choices.includes(handB) || choices.includes(handC))
  );
}

function getWinningHand(choiceA, choiceB) {
  let choices = [choiceA, choiceB];
  let winningHand;

  if (choiceA === choiceB) winningHand = "";
  if (choicesIncludes(choices, "Rock", "Scissors", "Lizard")) {
    winningHand = "Rock";
  } else if (choicesIncludes(choices, "Paper", "Rock", "Spock")) {
    winningHand = "Paper";
  } else if (choicesIncludes(choices, "Scissors", "Paper", "Lizard")) {
    winningHand = "Scissors";
  } else if (choicesIncludes(choices, "Lizard", "Paper", "Spock")) {
    winningHand = "Lizard";
  } else if (choicesIncludes(choices, "Spock", "Scissors", "Rock")) {
    winningHand = "Spock";
  }

  return winningHand;
}

function getRoundWinner(playerChoice, computerChoice, winningHand) {
  let winner;

  if (playerChoice === winningHand) {
    winner = player;
  } else if (computerChoice === winningHand) {
    winner = computer;
  }
  return winner;
}

function displayRoundWinner(roundWinner, playerChoice, computerChoice) {
  if (roundWinner === player) {
    prompt(`${playerChoice} beats ${computerChoice}!`);
    prompt("You win!");
  } else if (roundWinner === computer) {
    prompt(`${computerChoice} beats ${playerChoice}.`);
    prompt("You lose...");
  } else {
    prompt("It's a tie!");
  }
}

function updateScores(roundWinner, scores) {
  if (roundWinner === player) {
    scores.player += 1;
  } else if (roundWinner === computer) {
    scores.computer += 1;
  }
}

function displayScores(scores) {
  console.log("");
  prompt("Scores:");
  prompt(`${player}: ${scores.player}`);
  prompt(`${computer}: ${scores.computer}`);
  console.log("");
}

// Name and welcome
while (player === "") {
  prompt("What is your name?");
  player = read.question("");
}

console.log("");
prompt(`Welcome to Rock, paper, scissors, ${player}!`);
prompt(`You will be playing against ${computer} today.`);
console.log("");

// Game loop
while (true) {
  let scores = { player: 0, computer: 0 };
  let winner;
  let counter = 0;

  // Round loop
  while (true) {
    counter += 1;
    let roundWinner;

    prompt(`=== ROUND ${counter} ===`);
    console.log("");

    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    prompt(`You chose ${playerChoice}.`);
    prompt(`${computer} chose ${computerChoice}.`);
    console.log("");

    let winningHand = getWinningHand(playerChoice, computerChoice);
    roundWinner = getRoundWinner(playerChoice, computerChoice, winningHand);

    displayRoundWinner(roundWinner, playerChoice, computerChoice);
    updateScores(roundWinner, scores);
    displayScores(scores);

    if (scores.player >= 3) {
      winner = player;
      break;
    } else if (scores.computer >= 3) {
      winner = computer;
      break;
    }
  }

  console.log("");
  console.log("=====================================");
  prompt(`The grand winner is: \n${winner}!!!`);
  console.log("");

  prompt("Final Scores:");
  prompt(`${player}: ${scores.player}`);
  prompt(`${computer}: ${scores.computer}`);
  console.log("=====================================");

  console.log("");
  prompt("That was fun!");
  prompt("Press <Enter> to play again or 'q' to quit.");
  let answer = read.question("");

  if (answer.toLowerCase() === "q") break;
}

prompt(
  `Thank you for playing Rock, Paper, Scissors, Lizard, Spock, ${player}!`
);
