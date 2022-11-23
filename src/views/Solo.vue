<template>
  <!-- Header -->
  <div class="w-screen h-screen bg-white">
    <header>
      <nav class="navbar">
        <ul class="flex">
          <li>
            <a class="link" href="">About</a>
          </li>
          <li class="mx-auto margin-left">
            <a class="link" href="">Store</a>
          </li>
          <li>
            <a class="link" href="">Gmail</a>
          </li>
          <li>
            <a class="link" href="">Images</a>
          </li>
          <li>
            <div class="circle-shadow">
              <a class="menu-icon" href="">
                <svg
                  style="fill: #4b5563"
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
                  ></path>
                </svg>
              </a>
            </div>
          </li>
          <li>
            <div class="circle-shadow">
              <a class="user-icon" href=""><span>Z</span></a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <!-- Content -->
    <section class="mt-40 content-section">
      <div class="content-wrapper">
        <img
          class="logo-img"
          src="../assets/googlesearch.png"
          alt="Google Logo Image"
        />
        <div class="search-bar">
          <font-awesome-icon
            class="mr-3 text-gray-400"
            icon="fa-solid fa-magnifying-glass"
          />
          <input
            v-model="searchInput"
            class="search-input"
            type="text"
            @keydown="down($event)"
            @keyup="processInput($event)"
          />
          <font-awesome-icon
            class="mr-4 text-gray-400"
            icon="fa-solid fa-microphone"
          />
        </div>
        <div class="search-btns">
          <button class="google-search-btn" type="submit" @click="searchGoogle">
            Google Search
          </button>
          <button class="lucky-search-btn">I'm Feeling Lucky</button>
        </div>
        <div class="language">
          <p>
            Google offered in: <a class="" href="">中文(简体)</a> &nbsp;
            <a href=""> Bahasa Melayu</a>&nbsp;
            <a href="">தமிழ்</a>
          </p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="fixed bottom-0 w-full">
      <div class="footer-content upper-footer">
        <p>Singapore</p>
      </div>
      <div class="footer-content lower-footer">
        <ul class="lower-left-footer">
          <li>
            <a href="">Advertising</a>
          </li>
          <li>
            <a href="">Business</a>
          </li>
          <li>
            <a href="">How Search Works</a>
          </li>
        </ul>
        <ul class="lower-right-footer">
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">Terms</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
const presetSearch = ref("number of songs in the world");
const searchInput = ref("");
const songName = ref("");

let usermode = false;
let length = 0;
let trigger = false;

function down(e: { preventDefault: () => void }) {
  if (usermode == false) {
    e.preventDefault();
  }
}

function processInput(e: { keyCode: number; key: any }) {
  var spacebar = 32;
  var backspace = 8;
  if (usermode == false) {
    length += 1;
    searchInput.value = presetSearch.value.substring(0, length);

    if (e.keyCode === backspace) {
      trigger = false;
      songName.value = songName.value.substring(0, length);
    } else if (e.keyCode === spacebar) {
      if (trigger == false) {
        songName.value += e.key;
        trigger = true;
      } else if (trigger == true) {
        songName.value = songName.value.substring(0, length - 1);
        usermode = true;
        sendYoutube();
        console.log("songName: " + songName.value);
      }
    } else {
      trigger = false;
      songName.value += e.key;
    }
  }
}

function searchGoogle() {
  window.location.href = "https://www.google.com/search?q=" + searchInput.value;
}

// websocket
var receiverID = ref(123);
const ws = new WebSocket("wss://sock.agentzhao.me");

// Connection opened
ws.addEventListener("message", (event) => {
  console.log("Message from server:", event.data);
  try {
    JSON.parse(event.data);
  } catch (e) {
    receiverID = event.data.split("receiver ")[1];
  }
});

const sendYoutube = () => {
  axios
    .get("https://sock.agentzhao.me/searchyoutube?q=" + songName.value)
    .then((res) => {
      console.log(res.data);
      var youtube = {
        platform: "youtube",
        id: receiverID.value,
        songUrl: res.data,
      };
      console.log("sending this out:" + JSON.stringify(youtube));
      ws.send(JSON.stringify(youtube));
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style scoped>
body {
  font-family: sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */
header {
  height: 60px;
}

.navbar {
  height: 100%;
  width: 100%;
  padding: 10px 20px;
}

.navbar ul {
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
}

.navbar ul li {
  margin-left: 15px;
}

.navbar ul li a {
  color: black;
}

.link:hover {
  text-decoration: underline;
}

.circle-shadow {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-shadow:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.menu-icon,
.user-icon span {
  font-size: 18px;
}

.user-icon span {
  color: white;
}

.user-icon {
  background-color: #fbbc05;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
}

/* Content */
.content-section {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
}

.logo-img {
  width: 300px;
  margin-bottom: 20px;
}

.search-bar {
  border: 1px solid lightgray;
  width: 600px;
  height: 45px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding-left: 15px;
}

.search-bar:hover {
  box-shadow: 0px 0px 4px 0px #b5b5b5;
}

font-awesome-icon {
  font-size: 18px;
  color: gray;
  margin-right: 15px;
  cursor: pointer;
}

.search-bar input {
  flex-grow: 1;
  height: 30px;
  margin-right: 15px;
  font-size: 16px;
  border: none;
}

.search-bar input:focus {
  outline: none;
}

.search-btns {
  margin-top: 20px;
}

.search-btns button {
  height: 40px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  color: black;
  background-color: #f2f3f4;
}

.search-btns button:hover {
  border: 1px solid lightgray;
}

.google-search-btn {
  width: 120px;
}

.lucky-search-btn {
  width: 140px;
}

.language {
  margin-top: 20px;
  font-size: 14px;
}

.language p a {
  color: blue;
}

.language p a:hover {
  text-decoration: underline;
}

/* Footer */
footer {
  background-color: #f2f2f2;
  height: 100px;
}

.footer-content {
  display: flex;
  align-items: center;
  padding: 20px;
}

.upper-footer {
  height: 50%;
  border-bottom: 1px solid lightgray;
}

.upper-footer p {
  color: gray;
  font-size: 14px;
}

.lower-footer {
  height: 50%;
  display: flex;
  justify-content: space-between;
}

.lower-footer ul li a {
  font-size: 14px;
  color: gray;
}

.lower-footer ul li a:hover {
  text-decoration: underline;
}

.lower-left-footer {
  display: flex;
}

.lower-left-footer li {
  margin-right: 15px;
}

.lower-right-footer {
  display: flex;
}

.lower-right-footer li {
  margin-left: 15px;
}

/* Mobile and Tablet */
@media only screen and (max-width: 650px) {
  /* Navbar */
  .navbar ul {
    font-size: 14px;
  }

  .menu-icon,
  .user-icon span {
    font-size: 14px;
  }

  .circle-shadow {
    height: 30px;
    width: 30px;
  }

  /* Logo */
  .logo-img {
    width: 300px;
  }

  /* Search Bar */
  .search-bar {
    width: 90%;
    height: 35px;
  }

  .search-bar i {
    font-size: 14px;
  }

  /* Buttons */
  .search-btns button {
    height: 30px;
    font-size: 12px;
  }

  .google-search-btn {
    width: 100px;
  }

  .lucky-search-btn {
    width: 120px;
  }

  /* Language */
  .language {
    font-size: 12px;
  }

  /* Footer */
  footer {
    height: 150px;
  }

  .upper-footer {
    height: 50px;
  }

  .lower-footer {
    height: 100px;
    flex-direction: column;
  }

  .lower-left-footer {
    flex-wrap: wrap;
  }
}
</style>
