<template>
  <div class="game-board">
    <div class="game-board__deck">
      <div
        v-for="(card, index) in game.deck.items"
        class="game-card game-card--back"
        :key="`card-index-${index}`"
        :style="{left: `${index * .3}px`, top: `${index * .3}px`}"
      ></div>
    </div>

    <div class="game-board__controls">
      <button
        v-if="game.status === STATUS.NOT_STARTED"
        class="game-board__button"
        @click="() => game.start()"
      >
        Старт
      </button>

      <template v-if="game.status === STATUS.STARTED">
        <button
          class="game-board__button"
          @click="() => game.add(game.players[0])"
        >
          Добрать
        </button>

        <button
          class="game-board__button"
          @click="() => game.startAI()"
        >
          Стоп
        </button>
      </template>

      <button
        v-if="game.status !== STATUS.NOT_STARTED"
        class="game-board__button"
        @click="() => game.reset()"
      >
        Начать заново
      </button>
    </div>

    <div
      v-if="game.status !== STATUS.NOT_STARTED"
      class="game-board__players"
    >
      <div
        v-for="(player, index) in game.players"
        :key="`player-${index}`"
        class="game-board__player-hand"
      >
        <div>
          <h3 class="game-board__player--title">
            <span>Игрок {{ index + 1 }}</span> <span>({{ player.score }})</span>
          </h3>

          <div
            v-for="(card, index) in player.hand.items"
            :key="`player-card-${card.type}-${card.suit}`"
            class="game-card game-card--front"
            :style="{left: `${index * 25}%`}"
          >
            <div
              class="game-card__box game-card__box--top game-card__box--suit"
              :class="{ 'game-card__box--red': isRedSuit(card) }"
              :data-suit="card.suit"
            >
              {{ card.type }}
            </div>

            <div
              class="game-card__box game-card__box--bottom game-card__box--suit"
              :class="{ 'game-card__box--red': isRedSuit(card) }"
              :data-suit="card.suit"
            >
              {{ card.type }}
            </div>

            <div
              class="game-card__picture game-card__picture--suit"
              :class="{ 'game-card__picture--red': isRedSuit(card) }"
              :data-suit="card.suit"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Game from '@/entities/Game';
import {STATUS} from '@/config';

export default {
  data() {
    return {
      game: new Game()
    };
  },
  computed: {
    STATUS() {
      return STATUS
    }
  },
  methods: {
    isRedSuit(card) {
      return ['♦', '♥'].includes(card.suit)
    }
  }
}
</script>