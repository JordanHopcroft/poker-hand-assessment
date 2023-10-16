import deckInfo from "./deck.js";

export function buildDeck() {
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