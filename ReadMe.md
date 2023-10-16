# Poker Hand

A simple node package to generate a poker hand (with options for size) and evaluate the hand rank.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

```
npm install @splithyperion56/poker-hand
```

## Usage
```javascript
import Poker from 'poker-hand'
```
Or if using cjs
```javascript
var Poker = require('poker-hand')
```

For testing the local version you can run:
```
npm run game
```

This will run a quick simulation.

## API
### play({shuffleCount, handSize})
* **shuffleCount**: `Number | null` : How many times to shuffle the deck before drawing cards. Default: 3.
* **handSize**: `Number | null`: How many cards to draw. Default: 5.

Simulates a quick round of poker by shuffling a deck, drawing 5 cards to 
display and then ranks the hand that was drawn.

### shuffle(times)
- **times**: `Number` Number of times to shuffle the deck. Default: 3

Shuffles the deck of cards and clears the current hand.

### drawCards(handSize)
- **handSize**: `Number` Size of the hand to draw. Default: 5

Draws the first 5 cards from the deck.

### evalHand()
Returns the ranking of the current hand.

### showHand()
Prints the current hand to console.

## Contributing

Contributions are welcome! Here's how you can contribute to this project:
1. Fork the project
2. Create your own branch: `git checkout -b new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin new-feature`
5. Submit a pull request

## License

This project is licensed under the [MIT License](LICENSE).