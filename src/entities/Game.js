import Deck from '@/entities/Deck';
import Player from '@/entities/Player';
import {STATUS} from '@/config';

export default class Game {
  deck = new Deck()

  players = [new Player(), new Player()]

  status = STATUS.NOT_STARTED

  /**
   * Начать игру
   */
  start() {
    this.status = STATUS.STARTED;

    for (const player of this.players) {
      for (let i = 0; i < 2; i++) { // взять по 2 карты
        const card = this.deck.pop();

        player.hand.take(card); // взять карту на руку
      }
    }
  }

  /**
   * Начать игру заново
   */
  reset() {
    this.status = STATUS.NOT_STARTED;
    this.deck.reset();

    for (const player of this.players) {
      player.hand.reset();
    }
  }

  /**
   * Взять игроком карту
   */
  add(player) {
    const card = this.deck.pop();

    player.hand.take(card); // используем уже готовый метод
  }

  /**
   * Передать ход ИИ
   */
  startAI() {
    const [ai] = this.players.slice(-1); // последний игрок - ИИ

    while(ai.score < 21) { // продолжать ход пока на руке меньше 21
      if (ai.score > 17) // выход если больше 17
        break;

      this.add(ai); // иначе добрать карту
    }

    this.status = STATUS.FINISHED; // игра завершена
  }
}
