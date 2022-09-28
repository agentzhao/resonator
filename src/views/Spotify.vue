<template>
  <div class="flex flex-col justify-center items-center mx-auto w-2/3">
    <h1 class="my-10 text-3xl text-white">Spotify</h1>

    <p class="text-white">Enter song name:</p>
    <div class="flex">
      <input
        v-model="track"
        class="py-2 px-4 my-2 mr-2 bg-white rounded-md text-zinc-800"
        type="text"
        placeholder="Track name"
      />
      <input
        v-model="artist"
        class="py-2 px-4 my-2 mr-2 bg-white rounded-md text-zinc-800"
        type="text"
        placeholder="Artist name"
      />
      <button type="submit" :onclick="sendSpotify">
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
import axios from "axios";

const track = ref("");
const artist = ref("");

// websocket
// const socket = new WebSocket("ws://localhost:8080");
const socket = new WebSocket("wss://sock.agentzhao.me");

// Connection opened
socket.addEventListener("open", function (event) {
  console.log("Connected to WS Server");
});

// Listen for messages
socket.addEventListener("message", function (event) {
  console.log("Message from server:", event.data);
});

const sendSpotify = () => {
  axios
    .get(
      // "http://localhost:8080/searchspotify?track=" +
      "https://sock.agentzhao.me/searchspotify?track=" +
        track.value +
        "&artist=" +
        artist.value
    )
    .then((res) => {
      console.log(res.data);
      var spotify = {
        from: "resonator",
        to: "receiver",
        songName: track.value,
        songUrl: res.data,
      };
      socket.send(JSON.stringify(spotify));
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style scoped></style>
