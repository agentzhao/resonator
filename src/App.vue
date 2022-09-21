<template>
  <div class="w-screen h-screen bg-zinc-800">
    <!-- <nav> -->
    <!--   <RouterLink to="/">Home</RouterLink> -->
    <!--   <RouterLink to="/spotify">Spotify</RouterLink> -->
    <!--   <RouterLink to="/youtube">Youtube</RouterLink> -->
    <!-- </nav> -->
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&family=Open+Sans:wght@300;400;500;700&display=swap");

* {
  box-sizing: border-box;
  font-family: "Monsterrat", sans-serif;
}
</style>
