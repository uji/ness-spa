<template>
  <div>
    <h1>Sign in</h1>
    <p><input type="email" v-model.trim="email" placeholder="email" name="email" /></p>
    <p><input type="text" v-model.trim="password" placeholder="password" name="password" /></p>
    <button @click="signIn">Sign In</button>
    <button @click="signOut">Sign Out</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { signInWithEmailPassword, signOut as signOutByAuthenticator } from '@/types/firebase/authenticator'
import { auth } from '@/plugins/firebase'

export default defineComponent({
  setup(_, context) {
    const email = ref('')
    const password = ref('')

    const router = context.root.$router

    const signIn = async() => {
      await signInWithEmailPassword(auth, email.value, password.value)
      router.push('/')
    }

    const signOut = async() => {
      await signOutByAuthenticator(auth)
    }

    return {
      email,
      password,
      signIn,
      signOut,
    }
  },
})
</script>
