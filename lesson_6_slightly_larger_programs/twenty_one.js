// Rules of Twenty-One
// - Deck: Start with std 52-card deck
// - Goal: Get as close to 21 as possible without going over (bust = you lose)
// - Setup: Two participants, dealer and player, are both dealt a hand of two
// cards. The player can se own cards and ONE of dealer's cards.
// - Card values:
//  - 2-10: face value
//  - Jack, Queen, King: 10
//  - Ace: 11 if total sum of cards doesn't exceed 21 (including the Ace),
// 1 otherwise.
// - Player turn: Player always goes first
//  - Hit (dealth another card) or stay (no new card)
//  - Player can hit as many times as (s)he wants
//  - Turn is over when player stays
//  - Game is over if the player busts (player loses, dealer wins)
// - Dealer turn: Hit until total is at least 17, stay if total exceeds 17
//  - If dealer busts, player wins
// - Comparing cards: When both dealer and player stays, they compare cards.
//  - The winner is the one with the highest value

// QUESTIONS
// - What if equal values? Is it a draw?
// - Which dealer card should be displayed? Random?
// - What if dealer has more than two cards? Should all but one be displayed?

// PSEUDOCODE
// High-level
// 1. Initialize deck
// 2. Deal cards to player and dealer
// 3. Player turn: hit or stay
//    - Repeat until bust or stay
// 4. If player busts, dealer wins
// 5. Dealer turn: hit or stay
//    - hit until total >= 17
// 6. If dealer busts, player wins
// 7. Compare cards and declare winner

// Datastructures
// - Deck: object with arrays
// - Player's cards: object with cards and currentTotal
// - Dealer's cards: object with cards and currentTotal

// Calculate (update) Aces' values
// Each time an Ace is dealt:
// Sum up all cards but Aces (cardsTotal)
// For each Ace (initial value is 11)
// IF cardsTotal + 11 exceeds 21, then set Ace value to 1
// Add Ace value to cardsTotal

// Deal cards
// - Generate random number
// - Use random number as index to access card
//  - Add card to player or dealer's hand: card as key, card value as value
//  - Remove card from deck array

// setCardValue:
//  - IF card is 2-10, value is card
//  - IF card is not Ace, value is 10
//  - ELSE value is 11

// Player turn
// - Ask if hit or stay
//  - IF hit, deal card
//    - Calculate cardTotal
//    - IF cardTotal > 21 => game over (lose)
// - IF stay, end turn

// Dealer turn
// - Deal card
//    - Calculate cardTotal
//    - IF cardTotal > 21 => game over (lose)
// - Repeat until cardTotal> 17 => stay (end turn)

// CODE
// Setup
const read = require("readline-sync");

const DEALER_LIMIT = 17;

let deck;
let playerHand;
let dealerHand;
let playerTotal;
let dealerTotal;
let cardValues = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
  "Ace",
];
let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

function newDeck(cardValues, suits) {
  let cards = [];

  suits.forEach((suit) => {
    cardValues.forEach((value) => {
      cards.push([suit, value]);
    });
  });
  return cards;
}

function cardTotal(hand) {
  let sum = 0;
  let values = hand.map((card) => card[1]);

  values.forEach((value) => {
    if (value === "Ace") {
      sum += 11;
    } else if (["Jack", "Queen", "King"].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // Correct for aces
  values
    .filter((value) => value === "Ace")
    .forEach((_) => {
      if (sum > 21) sum -= 10;
    });

  return sum;
}

function displayHand(hand, total, firstHand = false) {
  let values = hand.map((card) => card[1]);
  let valueString = `${values.slice(0, values.length - 1)} and ${values.slice(
    values.length - 1
  )}`;

  if (hand === playerHand) {
    console.log(`Your cards: ${valueString} (sum: ${total})`);
  } else if (hand === dealerHand) {
    if (firstHand) {
      let card = dealerHand[0];
      console.log(`Dealer's cards: ${card[1]} and unknown card`);
    } else {
      console.log(`Dealer's cards: ${valueString} (sum: ${total})`);
    }
  }
}

function dealCard(deck, hand) {
  let cardIndex = Math.floor(Math.random() * deck.length);
  hand.push(deck[cardIndex]);
  deck.splice(cardIndex, 1);
}

function dealFirstHand(deck, hand) {
  dealCard(deck, hand);
  dealCard(deck, hand);
}

function bust(total) {
  return total > 21;
}

function playerTurn(deck, playerHand, playerTotal) {
  console.log("\nYOUR TURN");

  while (!bust(playerTotal)) {
    let answer = read.question("\nHit or stay (h/s)? ");
    if (answer === "s") {
      console.log("You stay\n");
      break;
    }
    if (answer === "h") {
      console.log("Hit\n");
      dealCard(deck, playerHand);
      playerTotal = cardTotal(playerHand);
    } else {
      console.log("Invalid input");
    }
    console.clear();
    console.log("YOUR TURN");
    console.log("");
    displayHand(playerHand, playerTotal);
  }
}

function dealerTurn(deck, dealerHand, dealerTotal) {
  console.log("\nDEALER TURN");
  displayHand(dealerHand, dealerTotal);

  while (dealerTotal <= DEALER_LIMIT) {
    console.log("\nDealer hits");
    dealCard(deck, dealerHand);
    dealerTotal = cardTotal(dealerHand);
    displayHand(dealerHand, dealerTotal);
  }

  if (!bust(dealerTotal)) {
    console.log("\nDealer stays");
  }
}

function detectResults(dealerTotal, playerTotal) {
  if (playerTotal > 21) {
    return "PLAYER_BUST";
  } else if (dealerTotal > 21) {
    return "DEALER_BUST";
  } else if (playerTotal > dealerTotal) {
    return "PLAYER";
  } else if (playerTotal < dealerTotal) {
    return "DEALER";
  } else {
    return "TIE";
  }
}

function displayResults(dealerTotal, playerTotal) {
  let result = detectResults(dealerTotal, playerTotal);

  switch (result) {
    case "PLAYER_BUST":
      console.log("You busted!\nDEALER WINS!");
      break;
    case "DEALER_BUST":
      console.log("Dealer busted!\nYOU WIN!");
      break;
    case "PLAYER":
      console.log("YOU WIN!");
      break;
    case "DEALER":
      console.log("DEALER WINS!");
      break;
    case "TIE":
      console.log("IT'S A TIE!");
  }
}

function playAgain() {
  let again;
  while (true) {
    again = read.question("\nDo you want to play again (y/n)? ");
    if (["y", "yes"].includes(again.toLowerCase())) return "y";
    if (["n", "no"].includes(again.toLowerCase())) return null;
    console.log("Incorrect input.");
  }
}

// Game loop
while (true) {
  console.clear();
  console.log("LET'S PLAY TWENTY-ONE!\n");

  deck = newDeck(cardValues, suits);
  playerHand = [];
  dealerHand = [];

  dealFirstHand(deck, dealerHand);
  dealFirstHand(deck, playerHand);
  playerTotal = cardTotal(playerHand);
  dealerTotal = cardTotal(dealerHand);

  console.log("STARTING HAND");
  displayHand(dealerHand, dealerTotal, (firstHand = true));
  console.log("");
  displayHand(playerHand, playerTotal);

  while (true) {
    playerTurn(deck, playerHand, playerTotal);
    playerTotal = cardTotal(playerHand);
    if (bust(playerTotal)) break;

    dealerTurn(deck, dealerHand, dealerTotal);
    dealerTotal = cardTotal(dealerHand);
    break;
  }

  console.log("\n======================");
  displayResults(dealerTotal, playerTotal);
  console.log("");
  displayHand(dealerHand, dealerTotal);
  displayHand(playerHand, playerTotal);
  console.log("======================\n");

  if (!playAgain()) break;
}

console.log("Thanks for playing Twenty-One!");
