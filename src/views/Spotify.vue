<template>
  <div class="flex flex-col justify-center items-center mx-auto w-2/3">
    <h1 class="my-10 text-3xl text-white">Spotify</h1>

    <p class="text-white">Enter song name:</p>
    <div class="flex">
      <input
        v-model="songName"
        class="py-2 px-4 my-2 mr-2 bg-white rounded-md text-zinc-800"
        type="text"
        placeholder="Song name"
      />
      <button type="submit" :onclick="searchSpotify()">
        <font-awesome-icon
          class="h-10 hover:text-gray-300 icons"
          icon="fa-solid fa-paper-plane"
        />
      </button>
    </div>
    <NavBar />
  </div>
</template>

<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import { ref } from "vue";

const songName = ref("");
function searchSpotify() {
  console.log(songName.value);
}
</script>

<style scoped></style>
