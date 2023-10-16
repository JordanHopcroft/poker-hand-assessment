import { EvalHand } from "../src/evalHand.cjs";

test("EvalHand returns the correct rank for a given hand", () => {

  // Test Straight Flush
  const hand2 = [
    { rank: "2", suit: "\u2665" },
    { rank: "3", suit: "\u2665" },
    { rank: "4", suit: "\u2665" },
    { rank: "5", suit: "\u2665" },
    { rank: "6", suit: "\u2665" }
  ];
  expect(EvalHand(hand2)).toBe("Straight Flush");

  // Test Four of a kind
  const hand3 = [
    { rank: "A", suit: "\u2660" },
    { rank: "A", suit: "\u2665" },
    { rank: "A", suit: "\u2666" },
    { rank: "A", suit: "\u2663" },
    { rank: "K", suit: "\u2660" }
  ];
  expect(EvalHand(hand3)).toBe("Four of a Kind");

  // Test Three of a kind
  const hand4 = [
    { rank: "A", suit: "\u2660" },
    { rank: "A", suit: "\u2665" },
    { rank: "A", suit: "\u2666" },
    { rank: "T", suit: "\u2663" },
    { rank: "K", suit: "\u2660" }
  ];
  expect(EvalHand(hand4)).toBe("Three of a Kind");

  // Test Full House
  const hand5 = [
    { rank: "7", suit: "\u2660" },
    { rank: "7", suit: "\u2665" },
    { rank: "7", suit: "\u2666" },
    { rank: "Q", suit: "\u2663" },
    { rank: "Q", suit: "\u2660" }
  ]
  expect(EvalHand(hand5)).toBe("Full House");

  // Test Flush
  const hand6 = [
    { rank: "A", suit: "\u2660" },
    { rank: "5", suit: "\u2660" },
    { rank: "7", suit: "\u2660" },
    { rank: "T", suit: "\u2660" },
    { rank: "J", suit: "\u2660" }
  ];
  expect(EvalHand(hand6)).toBe("Flush");

  // Test Straight
  const hand7 = [
    { rank: "A", suit: "\u2660" },
    { rank: "2", suit: "\u2665" },
    { rank: "3", suit: "\u2666" },
    { rank: "4", suit: "\u2663" },
    { rank: "5", suit: "\u2660" }
  ];
  expect(EvalHand(hand7)).toBe("Straight");

  // Test Two Pair
  const hand8 = [
    { rank: "A", suit: "\u2660" },
    { rank: "K", suit: "\u2665" },
    { rank: "3", suit: "\u2666" },
    { rank: "A", suit: "\u2663" },
    { rank: "K", suit: "\u2660" }
  ];
  expect(EvalHand(hand8)).toBe("Two Pair");

  // Test Pair
  const hand9 = [
    { rank: "A", suit: "\u2666" },
    { rank: "A", suit: "\u2663" },
    { rank: "7", suit: "\u2666" },
    { rank: "T", suit: "\u2663" },
    { rank: "K", suit: "\u2660" }
  ];
  expect(EvalHand(hand9)).toBe("Pair");
});