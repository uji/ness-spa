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
import { defineComponent, onMounted } from '@vue/composition-api'
import { useThreadListQuery } from '@/generated/graphql'
import { authenticator } from '@/plugins/firebase'

export default defineComponent({
  setup(_, context) {
    const router = context.root.$router
    onMounted(() => {
      if (!authenticator.isSignIn()) {
        router.push('/signin')
      }
    })
    const { result, loading, error } = useThreadListQuery()

    return {
      loading,
      error,
      result,
    }
  },
})
</script>
