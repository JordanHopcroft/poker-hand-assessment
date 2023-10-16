/**
 * Shuffles the given array of cards.
 *
 * @param {Array} cards - The array of cards to be shuffled.
 * @param {number} times - The number of times to shuffle the cards. Default is 1.
 * @return {Array} - The shuffled array of cards.
 */
export function shuffle(cards, times = 1) {
  for (let i = 0; i < times; i++) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    console.log("shuffle...");
  }

  return cards;
} 