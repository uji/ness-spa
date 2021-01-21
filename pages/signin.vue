<template>
  <form @submit.prevent="signIn" class="p-8 max-w-xs mx-auto">
    <h1 class="font-body font-bold text-black text-3xl mb-6">Sign in</h1>
    <Input v-model="email" placeholder="email" input-type="email" class="mb-4" />
    <Input v-model="password" placeholder="password" input-type="password" class="mb-4" />
    <SecondaryButton type="submit" text="Sign in" class="w-full mb-4" />
    <Button type="button" text="Sign out" @click="signOut" />
  </form>
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
