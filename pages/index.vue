<template>
  <div>
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
import { defineComponent } from '@vue/composition-api'
import { useThreadsQuery } from '@/generated/graphql'

export default defineComponent({
  setup() {
    const { result, loading, error } = useThreadsQuery()

    return {
      loading,
      error,
      result,
    }
  },
})
</script>
