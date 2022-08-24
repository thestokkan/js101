// Rules of Twenty-One
// - Deck: Start with std 52-card deck
// - Goal: Get as close to 21 as possible without going over (bust = you lose)
// - Setup: Two participants, dealer and player, are both dealt a hand of two cards. The player can se own cards and ONE of dealer's cards.
// - Card values:
//  - 2-10: face value
//  - Jack, Queen, King: 10
//  - Ace: 11 if total sum of cards doesn't exceed 21 (including the Ace), 1 otherwise.
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
//    - IF cardTotal = 21 => game over (win)
//    - IF cardTotal > 21 => game over (lose)
// - IF stay, end turn

// Dealer turn
// - Deal card
//    - Calculate cardTotal
//    - IF cardTotal = 21 => game over (win)
//    - IF cardTotal > 21 => game over (lose)
// - Repeat until cardTotal> 17 => stay (end turn)

// CODE
// Setup
const TWENTY_ONE = 21;
const DEALER_LIMIT = 17;

let deck = {};
let player = { cardTotal: 0, cards: {} };
let dealer = { cardTotal: 0, cards: {} };

function newDeck() {
  let cardValues = [
    ["1", 1],
    ["2", 2],
    ["3", 3],
    ["4", 4],
    ["5", 5],
    ["6", 6],
    ["7", 7],
    ["8", 8],
    ["9", 9],
    ["10", 10],
    ["Jack", 10],
    ["Queen", 10],
    ["King", 10],
    ["Ace", 11],
  ];
  let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  let cards = {};

  suits.forEach((suit) => {
    cardValues.forEach((value) => {
      cards[`${value[0]} of ${suit}`] = value[1];
    });
  });
  return cards;
}

function dealCards(deck, hand) {
  do {
    let randIndex = Math.floor(Math.random() * Object.keys(deck).length);
    let card = Object.keys(deck)[randIndex];

    hand.cards[card] = deck[card];
    delete deck[card];
  } while (Object.entries(hand.cards).length < 2);
}

function setAceValue(hand) {}

function updateCardTotal(hand) {
  // Reset cardTotal
  hand.cardTotal = 0;
  // Filter out values that are not Aces
  let noAceCards = Object.entries(hand.cards).filter(
    (card) => !card[0].includes("Ace")
  );

  // Sum up all but Aces
  noAceCards.forEach((card) => {
    hand.cardTotal += card[1];
  });

  // Add Aces depending on sum
  let aces = Object.entries(hand.cards).filter((card) =>
    card[0].includes("Ace")
  );

  if (aces[0]) {
    aces.forEach((ace) => {
      if (hand.cardTotal > 10) {
        ace[1] = 1;
      }
      hand.cardTotal += ace[1];
    });
  }
}

function displayPlayerHand(player) {
  console.log("You have:");
  Object.entries(player.cards).forEach((card) => console.log(card[0]));
  console.log(`Sum of cards: ${player.cardTotal}`);
}

function displayDealerHand(dealer) {
  let dealerCard = Object.entries(dealer.cards)[0][0];
  console.log(`Dealer has: ${dealerCard} and unknown card`);
}

// Game loop test
deck = newDeck();

dealCards(deck, player);
updateCardTotal(player);
displayPlayerHand(player);
console.log("");
dealCards(deck, player);
updateCardTotal(player);
displayPlayerHand(player);

// console.log(dealer);
// displayDealerHand(dealer);
