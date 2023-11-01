export default class Hand {
  items = []

  /**
   * Взять карту
   */
  take(card) {
    this.items.push(card);
  }

  /**
   * Сбросить руку
   */
  reset() {
    this.items.splice(0); // очищаем коллекцию
  }

  /**
   * Вычислить очки
   */
  calculate() {
    return this.items.reduce(
      (acc, card) => {
        let score = card.score;

        if (Array.isArray(card.score)) { // до 21 тузы считаются по 11, затем по 1
          const [first, last] = card.score;

          score = acc > 21 ? first : last
        }
        // здесь можно реализовать дополнительную логику
        // например, сейчас не реализован кейс с 2 тузами на руке

        return acc + score;
      },
      0
    )
  }
}