<template>
  <div class="p-8 max-w-xs mx-auto">
    <h1 class="text-3xl mb-6">Sign in</h1>
    <p><Input v-model="email" placeholder="email" input-type="email" /></p>
    <p>
      <Input v-model="password" placeholder="password" input-type="password" />
    </p>
    <SecondaryButton text="Sign In" @click="signIn" />
    <Button text="Sign Out" @click="signOut" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import {
  signInWithEmailPassword,
  signOut as signOutByAuthenticator,
} from '@/types/firebase/authenticator'
import { auth } from '@/plugins/firebase'

export default defineComponent({
  setup(_, { root }) {
    const email = ref('')
    const password = ref('')

    const signIn = async () => {
      await signInWithEmailPassword(auth, email.value, password.value)
      root.$router.push('/')
    }

    const signOut = async () => {
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
