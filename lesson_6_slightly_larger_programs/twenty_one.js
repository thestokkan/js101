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

const PLAYER = { cards: [], total: 0, score: 0 };
const DEALER = { cards: [], total: 0, score: 0 };
const BUST_LIMIT = 21;
const DEALER_LIMIT = 17;
const ACE_VALUE = 11;
const FACE_CARD_VALUE = 10;
const ACE_CORRECTION_VALUE = 10;
const SCORE_TO_WIN = 3;
const SUITS = ["Hearts", "Diamonds", "Clubs", "Spades"];
const CARD_VALUES = [
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

function newDeck() {
  let cards = [];

  SUITS.forEach((suit) => {
    CARD_VALUES.forEach((value) => {
      cards.push({ suit: suit, value: value });
    });
  });
  return cards;
}

function total(hand) {
  let sum = 0;
  let cardValues = hand.map((card) => card.value);

  cardValues.forEach((value) => {
    if (value === "Ace") {
      sum += ACE_VALUE;
    } else if (["Jack", "Queen", "King"].includes(value)) {
      sum += FACE_CARD_VALUE;
    } else {
      sum += Number(value);
    }
  });

  // Correct for aces
  cardValues
    .filter((value) => value === "Ace")
    .forEach((_) => {
      if (sum > BUST_LIMIT) sum -= ACE_CORRECTION_VALUE;
    });

  return sum;
}

function listOfCards(hand) {
  let cardValues = hand.map((card) => card.value);
  let allButLastValue = cardValues.slice(0, cardValues.length - 1);
  let lastValue = cardValues.slice(cardValues.length - 1);
  let stringOfValues;
  if (allButLastValue.length < 2) {
    stringOfValues = `${allButLastValue} and ${lastValue}`;
  } else {
    stringOfValues = `${allButLastValue.join(", ")}, and ${lastValue}`;
  }

  return stringOfValues;
}

function displayStartingHands() {
  let valueOfDealersFirstCard = DEALER.cards[0].value;
  console.log(`Dealer was dealt: ${valueOfDealersFirstCard} and unknown card`);
  console.log(
    `You were dealt: ${listOfCards(PLAYER.cards)} (sum: ${PLAYER.total})`
  );
}
function displayHand(participant) {
  if (participant === "player") {
    console.log(
      `Your cards: ${listOfCards(PLAYER.cards)} (sum: ${PLAYER.total})`
    );
  } else {
    console.log(
      `Dealer's cards: ${listOfCards(DEALER.cards)} (sum: ${DEALER.total})`
    );
  }
}

function dealCard(deck) {
  let cardIndex = Math.floor(Math.random() * deck.length);
  let card = deck[cardIndex];
  deck.splice(cardIndex, 1);
  return card;
}

function playerTurn(deck) {
  console.log("\nYOUR TURN");

  while (PLAYER.total < BUST_LIMIT) {
    let answer = read.question("\nHit or stay (h/s)? ");
    if (answer === "s") {
      console.log("You stay\n");
      break;
    }
    if (answer === "h") {
      console.log("Hit\n");
      PLAYER.cards.push(dealCard(deck));
      PLAYER.total = total(PLAYER.cards);
    } else {
      console.log("Invalid input");
    }
    console.clear();
    console.log("YOUR TURN\n");
    displayHand("player");
  }
}

function dealerTurn(deck) {
  console.log("\nDEALER TURN");
  displayHand("dealer");

  while (DEALER.total <= DEALER_LIMIT) {
    console.log("\nDealer hits");
    DEALER.cards.push(dealCard(deck));
    DEALER.total = total(DEALER.cards);
    displayHand("dealer");
  }

  if (DEALER.total < BUST_LIMIT) {
    console.log("\nDealer stays");
  }
}

function detectResults() {
  if (PLAYER.total > BUST_LIMIT) {
    return "PLAYER_BUST";
  } else if (DEALER.total > BUST_LIMIT) {
    return "DEALER_BUST";
  } else if (PLAYER.total > DEALER.total) {
    return "PLAYER";
  } else if (PLAYER.total < DEALER.total) {
    return "DEALER";
  } else {
    return "TIE";
  }
}

function displayResults() {
  let result = detectResults();

  switch (result) {
    case "PLAYER_BUST":
      console.log("You busted!\nDEALER WINS!\n");
      break;
    case "DEALER_BUST":
      console.log("Dealer busted!\nYOU WIN!\n");
      break;
    case "PLAYER":
      console.log("YOU WIN!\n");
      break;
    case "DEALER":
      console.log("DEALER WINS!\n");
      break;
    case "TIE":
      console.log("IT'S A TIE!\n");
  }
}

function updateMatchScore() {
  let result = detectResults();
  switch (result) {
    case "PLAYER_BUST":
      DEALER.score += 1;
      break;
    case "DEALER_BUST":
      PLAYER.score += 1;
      break;
    case "PLAYER":
      PLAYER.score += 1;
      break;
    case "DEALER":
      DEALER.score += 1;
      break;
  }
}

function matchWinner() {
  if (PLAYER.score > DEALER.score) {
    return "PLAYER";
  } else {
    return "DEALER";
  }
}

function displayMatchScore() {
  console.log(`SCORE: Player: ${PLAYER.score}  Dealer: ${DEALER.score}`);
}

function displayRoundSummary() {
  console.log("\n==================================");
  displayResults();
  displayHand("dealer");
  displayHand("player");
  displayMatchScore();
  console.log("==================================");
}

function displayMatchWinner() {
  console.clear();
  console.log("\n**********************************");
  console.log("MATCH OVER\n");
  displayMatchScore();
  console.log(`\n${matchWinner()} is the Match winner!!`);
  console.log("**********************************\n");
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

// Match loop
while (true) {
  let round = 1;
  PLAYER.score = 0;
  DEALER.score = 0;

  console.clear();
  console.log("Welcome to TWENTY-ONE!\n");
  console.log("*** Let's play best out of 5 ***\n\n");

  // Game loop
  while (PLAYER.score < SCORE_TO_WIN && DEALER.score < SCORE_TO_WIN) {
    read.question("\nPress <Enter> to continue");
    console.clear();
    console.log(`*** Round ${round} ***\n`);

    let deck = newDeck();
    PLAYER.cards = [dealCard(deck), dealCard(deck)];
    DEALER.cards = [dealCard(deck), dealCard(deck)];

    PLAYER.total = total(PLAYER.cards);
    DEALER.total = total(DEALER.cards);

    console.log("STARTING HAND");
    displayStartingHands();

    while (true) {
      playerTurn(deck);
      if (PLAYER.total > BUST_LIMIT) break;

      dealerTurn(deck);
      break;
    }

    updateMatchScore();
    displayRoundSummary();

    round++;
  }

  read.question("\n\nPress <Enter> to continue");
  displayMatchWinner();

  if (!playAgain()) break;
}

console.log("Thanks for playing Twenty-One!");
