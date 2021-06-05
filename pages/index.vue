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
    <!-- <CreateThreadModal /> -->
    <button class="border rounded-md" @click="createThread">
      createThread
    </button>
    {{ res }}
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from '@vue/composition-api'
import { AuthenticatorKey } from '@/types/firebase/authenticator'
import { getThreadsKey, createThreadKey } from '@/plugins/provide'
import { RouterHandlerKey } from '@/types/routerHandler'

export default defineComponent({
  setup(_, context) {
    const authenticator = inject(AuthenticatorKey)
    if (!authenticator) {
      throw new Error('authenticator is not provide')
    }
    const getThreads = inject(getThreadsKey)
    if (!getThreads) {
      throw new Error('getThreads is not provide')
    }
    const routerHandler = inject(RouterHandlerKey)
    if (!routerHandler) {
      throw new Error('routerHandler is not provide')
    }

    const createThreadFunc = inject(createThreadKey)
    if (!createThreadFunc) {
      throw new Error('getThreads is not provide')
    }
    const res = ref({})
    res.value = createThreadFunc({
      variables: {
        title: 'sample',
      },
    })

    onMounted(() => {
      if (!authenticator.isSignIn()) {
        routerHandler.push(context, '/signin')
      }
    })
    const { result, loading, error } = getThreads({ closed: false })

    return {
      loading,
      error,
      result,
      // createThread,
      res,
    }
  },
})
</script>
