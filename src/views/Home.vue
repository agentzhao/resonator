<template>
  <div class="flex flex-col justify-center items-center mx-auto">
    <h1 class="my-10 text-3xl text-white">Resonator</h1>

    <div class="grid grid-cols-4 mx-auto w-10/12 md:grid-cols-4 md:w-2/3">
      <router-link to="/solo">
        <font-awesome-icon
          class="hover:text-white text-[#4285F4] icons"
          icon="fa-brands fa-google"
        />
        <div class="text-sm text-center text-white font-OpenSans">Solo</div>
      </router-link>
      <router-link to="/youtube">
        <font-awesome-icon
          class="hover:text-white text-[#FF0000] icons"
          icon="fa-brands fa-youtube"
        />
        <div class="text-sm text-center text-white font-OpenSans">YouTube</div>
      </router-link>
      <router-link to="/spotify">
        <font-awesome-icon
          class="icons hover:text-white text-[#1DB954]"
          icon="fa-brands fa-spotify"
        />
        <div class="text-sm text-center text-white font-OpenSans">Spotify</div>
      </router-link>
      <router-link to="/voice">
        <font-awesome-icon
          class="text-gray-300 hover:text-white icons"
          icon="fa-solid fa-microphone"
        />
        <div class="text-sm text-center text-white font-OpenSans">Voice</div>
      </router-link>
    </div>
    <NavBar />
  </div>
</template>

<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
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
