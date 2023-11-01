export default class Card {
  suit;
  type;
  score;

  constructor(suit, type, score) {
    this.suit = suit;
    this.type = type;
    this.score = score;
  }
}