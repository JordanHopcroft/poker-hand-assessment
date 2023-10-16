import { buildDeck } from '../src/builddeck.js';
import { shuffle } from '../src/shuffle.js';

test('shuffle function shuffles the cards array', () => {
  const cards = buildDeck();
  const shuffledCards = shuffle(cards);

  // Ensure the cards array is shuffled
  expect(shuffledCards).not.toMatchObject(cards);
});

test('shuffle function shuffles the cards array multiple times', () => {
  const cards = buildDeck();
  const times = 3;
  const shuffledCards = shuffle(cards, times);

  // Ensure the cards array is shuffled multiple times
  expect(shuffledCards).not.toMatchObject(cards);
});