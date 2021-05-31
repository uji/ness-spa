<template>
  <div>
    <main class="w-4/5 md:max-w-screen-lg mx-auto">
      <div class="mt-4">
        <template v-if="loading">Now Loading...</template>
        <template v-if="error">{{ error }}</template>
        <div v-if="!loading && result.threads">
          <Threads :threads="result.threads" />
        </div>
      </div>
    </main>
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
    const { result, loading, error } = getThreadList({ closed: false })

    return {
      loading,
      error,
      result,
    }
  },
})
</script>
