<template>
  <div class="flex flex-col justify-center items-center mx-auto w-2/3">
    <h1 class="my-10 text-3xl text-white">Youtube</h1>

    <p class="text-white">Enter song name:</p>
    <div class="flex">
      <input
        v-model="songName"
        class="py-2 px-4 my-2 mr-2 bg-white rounded-md text-zinc-800"
        type="text"
        placeholder="Song name"
      />
      <button type="submit" @click="searchYoutube">
        <font-awesome-icon
          class="h-10 hover:text-gray-300 icons"
          icon="fa-solid fa-paper-plane"
        />
      </button>
    </div>

    <button class="bg-green-400" @click="checkEnv()">
      check if api is working
    </button>

    <button class="bg-pink-400" @click="authenticate().then(loadClient)">
      authorize and load
    </button>
    <button class="bg-orange-500" @click="execute()">execute</button>
    <NavBar />
  </div>
</template>

<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import { ref } from "vue";

const songName = ref("");

function searchYoutube() {
  console.log(songName.value);
}

function checkEnv() {
  console.log("working");
  console.log(import.meta.env.VITE_YOUTUBE_API_KEY);
  console.log(import.meta.env.VITE_API_CLIENT_ID);
}

// youtube
function authenticate() {
  return gapi.auth2
    .getAuthInstance()
    .signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
    .then(
      function () {
        console.log("Sign-in successful");
      },
      function (err) {
        console.error("Error signing in", err);
      }
    );
}
function loadClient() {
  gapi.client.setApiKey(import.meta.env.VITE_YOUTUBE_API_KEY);
  return gapi.client
    .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(
      function () {
        console.log("GAPI client loaded for API");
      },
      function (err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  return gapi.client.youtube.search
    .list({
      part: ["snippet"],
      maxResults: 1,
      q: "best part her",
      type: ["video"],
      videoCategoryId: "10",
      videoDuration: "short",
    })
    .then(
      function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
      function (err) {
        console.error("Execute error", err);
      }
    );
}
gapi.load("client:auth2", function () {
  gapi.auth2.init({ client_id: import.meta.env.VITE_API_CLIENT_ID });
});
</script>

<style scoped></style>
