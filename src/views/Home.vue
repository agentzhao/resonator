<template>
  <div class="flex flex-col justify-center items-center mx-auto w-2/3">
    <h1 class="mt-10 text-3xl text-white">Resonator</h1>

    <button class="py-2 px-4 mt-10 bg-white rounded-md text-zinc-800">
      <router-link to="/youtube">Youtube</router-link>
    </button>
    <button class="py-2 px-4 mt-10 bg-white rounded-md text-zinc-800">
      <router-link to="/spotify">Spotify</router-link>
    </button>
  </div>
</template>

<script setup lang="ts">
// router link to youtube
// function toYoutube() {
//   router.push("/youtube");
// }
//
// function toSpotify() {
//   router.push("/spotify");
// }
</script>

<style scoped></style>
