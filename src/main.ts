import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faMagnifyingGlass,
  faKeyboard,
  faMicrophone,
  faAngleLeft,
  faHouse,
  faAngleRight,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";

import {
  faYoutube,
  faSpotify,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faYoutube,
  faSpotify,
  faGoogle,
  faMagnifyingGlass,
  faKeyboard,
  faMicrophone,
  faAngleLeft,
  faHouse,
  faAngleRight,
  faRotate
);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
