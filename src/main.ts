import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { apolloClient } from '@/graphql/client';
import { firebaseConfig } from '@/firebase/config'
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
export const authUI = new firebaseui.auth.AuthUI(firebase.auth());

createApp(App)
  .use(store)
  .use(router)
  .provide(DefaultApolloClient, apolloClient)
  .mount('#app');
