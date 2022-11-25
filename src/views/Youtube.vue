<template>
  <div class="flex flex-col justify-center items-center mx-auto w-2/3">
    <h1 class="my-10 text-3xl text-white">Youtube</h1>

    <p class="text-white">Enter song name:</p>
    <div class="flex flex-col">
      <input
        v-model="songName"
        class="py-2 px-4 my-2 mr-2 bg-white rounded-md text-zinc-800"
        type="text"
        placeholder="Song name"
      />
      <div class="mx-auto">
        <button
          class="py-1 px-3 mt-2 bg-white rounded-md text-zinc-800"
          type="submit"
          @click="sendYoutube"
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
          {{ client["ip"] }}
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

const songName = ref("");
const clients = ref(null);

// websocket
const ws = new WebSocket("wss://sock.agentzhao.me");

// Connection opened
ws.addEventListener("open", function (event) {
  console.log("Connected to WS Server");
});

ws.addEventListener("message", (event) => {
  console.log("Message from server:", event.data);
  try {
    JSON.parse(event.data);
  } catch (e) {
    console.log("error");
  }
});

const sendYoutube = () => {
  axios
    .get("https://sock.agentzhao.me/searchyoutube?q=" + songName.value)
    .then((res) => {
      console.log(res.data);
      var youtube = {
        platform: "youtube",
        songUrl: res.data,
      };
      console.log("sending this out: " + JSON.stringify(youtube));
      ws.send(JSON.stringify(youtube));
    })
    .catch((err) => {
      console.log(err);
    });
};

function refreshClients() {
  axios
    .get("https://sock.agentzhao.me/clients")
    .then((response) => {
      // string2 = JSON.stringify(response.data, null, 2);
      clients.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>

<style scoped></style>
