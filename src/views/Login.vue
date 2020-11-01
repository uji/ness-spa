<template>
  <!-- The surrounding HTML is left untouched by FirebaseUI.
       Your app may use that space for branding, controls and other   customizations.-->
  <h1>Welcome to My Awesome App</h1>
  <div id="firebaseui-auth-container"></div>
  <div id="loader">Loading...</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDoxQU1-q6IrXoo9lPHH8wLBGm4dr5BA2w',
  authDomain: 'ness-85856.firebaseapp.com',
  databaseURL: 'https://ness-85856.firebaseio.com',
  projectId: 'ness-85856',
  storageBucket: 'ness-85856.appspot.com',
  messagingSenderId: '410365716960',
  appId: '1:410365716960:web:01fb9a4a9869527b2e2385',
  measurementId: 'G-E34BNZV0JP'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());
firebaseui.auth.AuthUI;
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult: any, redirectUrl: any) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'redirect',
  signInSuccessUrl: '/',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};

export default defineComponent({
  setup() {
    onMounted(() => {
      ui.start('#firebaseui-auth-container', {
        signInOptions: [
          {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false
          }
        ]
      });
      // The start method will wait until the DOM is loaded.
      // ui.start('#firebaseui-auth-container', uiConfig);
    });
  }
});
</script>
