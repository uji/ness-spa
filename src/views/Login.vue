<template>
  <!-- The surrounding HTML is left untouched by FirebaseUI.
       Your app may use that space for branding, controls and other   customizations.-->
  <h1>Welcome to My Awesome App</h1>
  <div id="firebaseui-auth-container"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import { authUI } from '@/main';
// import { uiConfig } from '@/firebase/ui'

export default defineComponent({
  setup() {
    onMounted(() => {
      // TODO: UIちゃんと作る
      authUI.start('#firebaseui-auth-container', {
        signInOptions: [
          {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false
          }
        ]
      });
      // authUI.start('#firebaseui-auth-container', uiConfig);
    });
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user == null) {
        return;
      }
      const idToken = await user.getIdToken();
      localStorage.setItem('idToken', idToken);
    });
  }
});
</script>
