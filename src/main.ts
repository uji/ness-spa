import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ApolloClient from "apollo-boost";

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: "http://localhost:3000/query"
});

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
