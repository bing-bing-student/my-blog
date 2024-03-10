<script setup>
import { RouterView } from 'vue-router';

import Navigation from './components/Navigation.vue'
import filingsInfo from './components/filingsInfo.vue'

</script>

<template>
  <div class="app">
    <Navigation></Navigation>
    <div class="content-wrapper">
      <router-view></router-view>
      <filingsInfo></filingsInfo>
    </div>
  </div>
</template>

<style scoped>
.app {
  display: grid;
  grid-template-rows: 1fr;
  height: 100vh;
}

.content-wrapper {
  display: grid;
  grid-template-rows: 1fr;
  overflow-y: auto;
}
</style>