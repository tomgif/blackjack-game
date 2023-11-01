import {scores, suits, types} from '@/config';
import Card from '@/entities/Card';

export default class Deck {

  items = [];

  constructor() {
    this.init(); // сразу при создании экземпляра - заполним картами
    this.shuffle(); // затем перемешаем колоду
  }

  /**
   * Создание колоды из конфига
   */
  init() {
    for (const suit of suits) {
      for (const type of types) {
        const card = new Card(suit, type, scores[type]);

        this.items.push(card);
      }
    }
  }

  /**
   * Перемешать колоду (метод перемешивания массива со stackoverflow)
   */
  shuffle() {
    let currentIndex = this.items.length,  randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.items[currentIndex], this.items[randomIndex]] = [
        this.items[randomIndex], this.items[currentIndex]];
    }
  }

  /**
   * взять верхнюю карту
   */
  pop() {
    return this.items.pop();
  }

  /**
   * Сбросить и пересоздать
   */
  reset() {
    this.items.splice(0); // очищаем коллекцию; не присваеваем [], чтобы не сломать реактивность
    this.init(); // пересоздаём колоду
    this.shuffle(); // перемешиваем
  }
}