var Hand = require("pokersolver").Hand;

/**
 * Evaluates a poker hand and returns the rank name.
 *
 * @param {Array} hand - An array of cards representing the hand.
 * @return {string} The name of the rank of the hand.
 */
export function evalHand(hand) {
  // eval poker hand
  let rank = Hand.solve(hand.map(card => {
    return `${card.rank}${card.shortCode}`;
  }))

  console.log(`You have: ${rank.name}`);
}

module.exports = {
  evalHand: evalHand
}