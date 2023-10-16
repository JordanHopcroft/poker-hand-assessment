'use strict';

var deckInfo = {
  "suits": [
    {
      name: "Spades",
      shortCode: "s",
      unicode: "\u2660"
    },
    {
      name: "Hearts",
      shortCode: "h",
      unicode: "\u2665"
    },
    {
      name: "Clubs",
      shortCode: "c",
      unicode: "\u2666"
    },
    {
      name: "Diamonds",
      shortCode: "d",
      unicode: "\u2663"
    }
  ],
  "ranks": {
    "1": "A",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "10": "T",
    "11": "J",
    "12": "Q",
    "13": "K"
  }
};

function buildDeck() {
  const suits = deckInfo.suits;
  const ranks = deckInfo.ranks;

  const deck = [];

  for (const suit of suits) {
    const ranksKeys = Object.keys(ranks);
    for (const rank of ranksKeys) {
      const card = {
        suit: suit.name,
        shortCode: suit.shortCode,
        unicode: suit.unicode,
        rank: "" + ranks[rank],
        val: Number.parseInt(rank)
      };
      deck.push(card);
    }
  }

  return deck;
}

var Hand = require("pokersolver").Hand;

/**
 * Evaluates a poker hand and returns the rank name.
 *
 * @param {Array} hand - An array of cards representing the hand.
 * @return {string} The name of the rank of the hand.
 */
function evalHand(hand) {
  // eval poker hand
  let rank = Hand.solve(hand.map(card => {
    return `${card.rank}${card.shortCode}`;
  }));

  console.log(`You have: ${rank.name}`);
}

module.exports = {
  evalHand: evalHand
};

/**
 * Shuffles the given array of cards.
 *
 * @param {Array} cards - The array of cards to be shuffled.
 * @param {number} times - The number of times to shuffle the cards. Default is 1.
 * @return {Array} - The shuffled array of cards.
 */
function shuffle(cards, times = 1) {
  for (let i = 0; i < times; i++) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    console.log("shuffle...");
  }

  return cards;
}

// build a desk of cards

class Poker {
  #shuffleCount = 3;
  #handSize = 5;
  #deck = [];
  #hand = [];
  #handRank = "";

  /**
   * Initializes a new instance of the class.
   *
   * @param {Object} props - Optional parameters for the constructor.
   * @param {number} props.shuffleCount - The number of times to shuffle the deck. Defaults to the value of this.#shuffleCount.
   * @param {number} props.handSize - The size of the hand. Defaults to the value of this.#handSize.
   */
  constructor(props = { shuffleCount: this.#shuffleCount, handSize: this.#handSize }) {
    const { shuffleCount, handSize } = props;
    this.#shuffleCount = shuffleCount ?? this.#shuffleCount;
    this.#handSize = handSize ?? this.#handSize;

    this.#deck = buildDeck();
  }

  /**
   * Generates a poker hand of a specified size and evaluates the hand.
   *
   * @param {number} [handSize=5] - The size of the poker hand to generate. Defaults to 5.
   * @return {undefined} - This function does not return a value.
   */
  play(handSize = 5) {
    const shuffledDeck = shuffle(this.#deck, 3);
    this.#hand = shuffledDeck.slice(0, this.#handSize);
    this.showHand();
    this.#handRank = evalHand(this.#hand);
  }

  /**
   * Shuffles the deck a specified number of times and resets the hand and hand rank.
   *
   * @param {number} times - The number of times to shuffle the deck. Defaults to the value of `shuffleCount` property.
   * @return {void} - This function does not return a value.
   */
  shuffle(times = this.#shuffleCount) {
    this.#deck = shuffle(this.#deck, times);
    this.#hand = [];
    this.#handRank = "";
  }

  // TODO: draw 5 new cards, may require a discard pile
  /**
   * Draw cards from the deck.
   *
   * @param {number} handSize - The number of cards to draw. Defaults to the hand size limit.
   * @return {Array} An array of cards drawn from the deck.
   */
  drawCards(handSize = this.#handSize) {
    this.#hand = this.#deck.slice(0, handSize);
    return this.#hand;
  }

  /**
   * Evaluates the hand.
   *
   * @return {type} the result of the evaluation
   */
  evalHand() {
    if (this.#hand.length === 0) {
      throw new Error("Hand is empty");
    }
    EvalHand(this.#hand);
  }

  /**
   * Logs the player's hand to the console.
   *
   * @return {void} 
   */
  showHand() {
    console.log("Your hand: " + this.#hand.map(card => {
      return `${card.rank}${card.unicode}`;
    }).join(" "));
  }
}

module.exports = Poker;
