import Hand from '@/entities/Hand';

export default class Player {
  hand = new Hand()

  /**
   * Подсчитаем количество очков на руке
   */
  get score() {
    return this.hand.calculate();
  }
}
