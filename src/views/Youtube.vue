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
      <input
        v-model="receiverID"
        class="py-2 px-4 my-2 mr-2 bg-white rounded-md text-zinc-800"
        type="text"
        placeholder="Receiver ID"
      />
      <button type="submit" @click="sendYoutube">
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

const songName = ref("");
var receiverID = ref("");

// websocket
const ws = new WebSocket("wss://sock.agentzhao.me");

// Connection opened
ws.addEventListener("open", function (event) {
  console.log("Connected to WS Server");
});

ws.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
});

const sendYoutube = () => {
  axios
    // .get("http://localhost:8080/searchyoutube?q=" + songName.value)
    .get("https://sock.agentzhao.me/searchyoutube?q=" + songName.value)
    .then((res) => {
      console.log(res.data);
      var youtube = {
        platform: "youtube",
        id: receiverID.value,
        songUrl: res.data,
      };
      console.log("sending this out: " + JSON.stringify(youtube));
      ws.send(JSON.stringify(youtube));
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style scoped></style>
