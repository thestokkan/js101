// // In this assignment, we'll build a Rock Paper Scissors game. Rock Paper
// Scissors is a simple game played between two opponents. Both the opponents
// choose an item from rock, paper, and scissors. The winner is decided
// according to the following rules:
//
// 1. If player a chooses rock and player b chooses scissors, player a wins.
// 2. If player a chooses paper and player b chooses rock, player a wins.
// 3. If player a chooses scissors and player b chooses paper, player a wins.
// 4. If both players choose the same item, neither player wins. It's a tie.
//
// Our version of the game lets the user play against the computer. The game
// flow should go like this:
//
// 1. The user makes a choice.
// 2. The computer makes a choice.
// 3. The winner is displayed.

// PEDAC
//
// UNDERSTAND THE PROBLEM
// - Input: Choices from user and computer
// - Output: The winner based on choices
// - Requirements
//   - Explicit:
//    Rules of the game:
//    1. If player A chooses rock and player B chooses scissors, player A wins.
//    2. If player A chooses paper and player B chooses rock, player A wins.
//    3. If player A chooses scissors and player P chooses paper, player A wins.
//    4. If both players choose the same item, neither player wins. It's A tie.
//   - Implicit:
//
// EXAMPLES/EDGE CASES
//
//
// ALGORITHM
//
// 1. Welcome the player to the game
//    - Ask for name (validation loop)
// 2. Start the game (game loop)
//    - Ask to choose rock, paper, or scissors (validation loop)
//    - Determine randomized computer choice
//    - Determine result based on player and computer choices
//       -
//       -
//    - Display result
//    - Ask for another game
//      - If yes, continue
//      - If no, exit main loop and display goodbye message
// CODE

const read = require("readline-sync");
const os = require("os");

function prompt(message) {
  console.log(`=> ${message}`);
}

const computer = os.hostname();
let player = "";

// Translate choice input from number to word
function choiceToWords(choice) {
  switch (choice) {
    case "1":
      return "Rock";
    case "2":
      return "Paper";
    case "3":
      return "Scissors";
  }
  return "Not valid";
}

function getPlayerChoice() {
  prompt("Ready, set...CHOOSE:\n1) Rock\n2) Paper\n3) Scissors");
  let playerChoiceNum = read.question("");

  while (!["1", "2", "3"].includes(playerChoiceNum)) {
    prompt("Please choose either 1, 2, or 3:");
    playerChoiceNum = read.question("");
  }

  return choiceToWords(playerChoiceNum);
}

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getComputerChoice() {
  return getRandom(["Rock", "Paper", "Scissors"]);
}

function getWinningHand(choiceA, choiceB) {
  let choices = [choiceA, choiceB];
  if (choiceA === choiceB) {
    return "";
  } else if (choices.includes("Rock") && choices.includes("Paper")) {
    return "Paper";
  } else if (choices.includes("Rock") && choices.includes("Scissors")) {
    return "Rock";
  } else {
    return "Scissors";
  }
}

// Name and welcome
while (player === "") {
  prompt("What is your name?");
  player = read.question("");
}

prompt(`Welcome to Rock, paper, scissors, ${player}!`);
prompt(`You will be playing against ${computer} today.`);
console.log("");

// Game loop
while (true) {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  prompt(`You chose ${playerChoice}.`);
  prompt(`${computer} chose ${computerChoice}.`);
  console.log("");

  let winningHand = getWinningHand(playerChoice, computerChoice);

  if (winningHand) {
    if (playerChoice === winningHand) {
      prompt(`${playerChoice} beats ${computerChoice}!`);
      prompt("You win!");
    } else {
      prompt(`${computerChoice} beats ${playerChoice}.`);
      prompt("You lose...");
    }
  } else {
    prompt("It's a tie!");
  }

  console.log("");
  prompt("Do you want to play again? (y/n)");
  let answer = read.question("");

  if (!["y", "yes"].includes(answer.toLowerCase())) break;
}
