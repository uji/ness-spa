<template>
  <header
    class="h-14 overflow-hidden flex flex-row ring-2 ring-gray-300 ring-opacity-50"
  >
    <img src="~assets/svg/ness-icon.svg" class="h-6 mx-8 my-auto" />
    <SecondaryButton
      v-if="!isSingedIn"
      text="Sign in"
      class="ml-auto mr-8 my-auto"
      @click="signIn"
    />
    <Button
      v-if="isSingedIn"
      text="Sign out"
      class="ml-auto mr-8 my-auto"
      @click="signOut"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { authenticator } from '@/plugins/firebase'

export default defineComponent({
  setup(_, { root }) {
    const isSingedIn = authenticator.isSignIn

    const signIn = () => {
      root.$router.push('/signIn')
    }

    const signOut = () => {
      authenticator.signOut()
      root.$router.push('/signIn')
    }

    return {
      isSingedIn,
      signIn,
      signOut,
    }
  },
})
</script>
