<template>
  <div>
    <Header />
    <main class="w-4/5 md:max-w-screen-lg mx-auto">
      <p v-if="loading">Now Loading...</p>
      <p v-if="error">{{ error }}</p>
      <div v-if="!loading && result.threads">
        <div
          v-for="thread in result.threads"
          :key="thread.id"
          class="flex items-center mt-2 border px-4 py-2 rounded"
        >
          <div class="mr-4">
            {{ thread.title }}
          </div>
          <div
            class="flex items-center ml-auto py-1 px-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-6 w-6 fill-stroke text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
            <div class="text-gray-500">10</div>
          </div>
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
    const { result, loading, error } = getThreadList()

    return {
      loading,
      error,
      result,
    }
  },
})
</script>
