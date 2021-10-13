import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(router);

app.use(VueGtag, {
  config: { id: "UA-187678640-1" },
});

// app.use(VueGtag, {
//   property: {
//     id: "UA-187678640-1",
//     params: {
//       send_page_view: false,
//     },
//   },
// });

app.mount("#app");
