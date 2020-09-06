import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// @ts-ignore
import { createProvider } from "./vue-apollo";

Vue.config.productionTip = false;

// @ts-ignore
new Vue({
  router,
  store,
  // @ts-ignore
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
