import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ApolloClient from "apollo-boost";
import { provide } from "@vue/composition-api";
import { DefaultApolloClient } from "@vue/apollo-composable";
import Vue from "vue";

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: "http://localhost:3000/query"
});

const app = new Vue({
  router, //追加
  store,
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: h => h(App),
}).$mount("#app");
