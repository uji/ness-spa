<template>
  <div class="p-8 max-w-xs mx-auto">
    <img src="~assets/svg/ness-logo.svg" class="mx-auto h-12 pr-4 mb-8"/>
    <form @submit.prevent="signIn">
      <h1 class="font-body font-medium text-black text-3xl mb-6">Sign in</h1>
      <Input v-model="email" placeholder="email" input-type="email" class="mb-4" />
      <Input v-model="password" placeholder="password" input-type="password" class="mb-4" />
      <SecondaryButton type="submit" text="Sign in" class="w-full mb-4" />
      <Button type="button" text="Sign out" @click="signOut" />
    </form>
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
