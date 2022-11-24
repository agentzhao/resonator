<template>
  <div class="flex flex-col justify-center items-center mx-auto w-2/3">
    <h1 class="my-10 text-3xl text-white">Spotify</h1>

    <p class="text-white">Enter song name:</p>
    <div class="flex flex-col">
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
      <div class="mx-auto">
        <button
          class="py-1 px-3 mt-2 bg-white rounded-md text-zinc-800"
          type="submit"
          @click="sendSpotify"
        >
          Send
        </button>
      </div>
    </div>

    <!-- Receivers -->
    <div class="flex flex-col items-center mt-10 justify-centre">
      <p class="text-white">Receivers Connected:</p>
      <ol>
        <li class="text-sm text-white" v-for="client in clients">
          {{ client.ip }}
        </li>
      </ol>
      <button type="submit" @click="refreshClients">
        <font-awesome-icon
          class="h-7 hover:text-gray-300 icons"
          icon="fa-solid fa-rotate"
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
const clients = ref(null);

// websocket
const ws = new WebSocket("wss://sock.agentzhao.me");

// Connection opened
ws.addEventListener("open", function (event) {
  console.log("Connected to WS Server");
});

// Listen for messages
ws.addEventListener("message", function (event) {
  console.log("Message from server ", event.data);
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
        platform: "spotify",
        songUrl: res.data,
      };
      ws.send(JSON.stringify(spotify));
    })
    .catch((err) => {
      console.log(err);
    });
};

function refreshClients() {
  axios
    .get("http://sock.agentzhao.me/clients")
    .then((response) => {
      clients.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>

<style scoped></style>
