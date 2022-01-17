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

function prompt(message) {
  console.log(`=> ${message}`);
}

const computer = os.hostname();
let player = "";

// Translate choice input from number to word
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
  console.log("r) Rock\np) Paper\ns) Scissors\nl) Lizard\nS) Spock");
}
function getPlayerChoice() {
  prompt("Make your choice:");
  displayChoices();
  let playerChoiceNum = read.question("");

  while (!["r", "p", "s", "l", "S"].includes(playerChoiceNum)) {
    prompt('Invalid input, please choose one of the below letters:');
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

  if (choiceA === choiceB) return "";

  if (choicesIncludes(choices, "Rock", "Scissors", "Lizard")) {
    return "Rock";
  }

  if (choicesIncludes(choices, "Paper", "Rock", "Spock")) {
    return "Paper";
  }

  if (choicesIncludes(choices, "Scissors", "Paper", "Lizard")) {
    return "Scissors";
  }

  if (choicesIncludes(choices, "Lizard", "Paper", "Spock")) {
    return "Lizard";
  }

  if (choicesIncludes("Spock", "Scissors", "Rock")) {
    return "Spock";
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
  prompt("That was fun!");
  prompt("Press <Enter> to play again or 'q' to quit.");
  let answer = read.question("");

  if (answer.toLowerCase() === "q") break;
}

prompt(
  `Thank you for playing Rock, Paper, Scissors, Lizard, Spock, ${player}!`
);
