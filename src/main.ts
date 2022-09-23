import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { faYoutube, faSpotify } from "@fortawesome/free-brands-svg-icons";

library.add(faYoutube, faSpotify, faPaperPlane);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
