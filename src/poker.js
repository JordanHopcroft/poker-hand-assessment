// build a desk of cards
import { buildDeck } from "./builddeck.js";
import { evalHand } from "./evalHand.cjs";
import { shuffle } from "./shuffle.js";

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
  // TODO: check handSize is of valid length for any gametype of poker
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
    evalHand(this.#hand);
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

export default Poker;

