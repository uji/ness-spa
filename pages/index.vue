<template>
  <div>
    <Header />
    <h1>Hello world!</h1>
    <h2 v-if="loading">Now Loading...</h2>
    <h2 v-if="error">{{ error }}</h2>
    <ul v-if="!loading && result.threads">
      <li v-for="thread in result.threads" :key="thread.id">
        {{ thread.id }} {{ thread.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted } from '@vue/composition-api'
import { AuthenticatorKey } from '@/types/firebase/authenticator'
import { getThreadListKey } from '@/plugins/provide'
import { RouterHandlerKey } from '@/types/routerHandler'

export default defineComponent({
  setup(_, context) {

    const authenticator = inject(AuthenticatorKey)
    if (!authenticator) {
      throw new Error('authenticator is not provide')
    }
    const getThreadList = inject(getThreadListKey)
    if (!getThreadList) {
      throw new Error('getThreadList is not provide')
    }
    const routerHandler = inject(RouterHandlerKey)
    if (!routerHandler) {
      throw new Error('routerHandler is not provide')
    }

    onMounted(() => {
      if (!authenticator.isSignIn()) {
        routerHandler.push(context, '/signin')
      }
    })
    const { result, loading, error } = getThreadList()

    return {
      loading,
      error,
      result,
    }
  },
})
</script>
