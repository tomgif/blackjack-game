<template>
  <div id="app">
    <div class="container">
      <game-board></game-board>
    </div>
  </div>
</template>

<script>
import GameBoard from '@/components/game-board.vue';

export default {
  name: 'App',
  components: {
    GameBoard
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,700;1,400;1,600;1,700&display=swap');

html {
  font-family: 'Open Sans', sans-serif;
}

html, body, #app {
  height: 100%;
}

#app {
  background-color: #327932;
}

.container {
  width: 1200px;
  margin: 0 auto;
}
</style>