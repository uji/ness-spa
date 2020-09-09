import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { apolloClient } from '@/graphql/client';

createApp(App)
  .use(store)
  .use(router)
  .provide(DefaultApolloClient, apolloClient)
  .mount('#app');
