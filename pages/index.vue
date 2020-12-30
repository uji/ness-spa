<template>
  <div>
    <h1>Hello world!</h1>
    <ul>
      <li v-for="thread in threads" :key="thread.id">
        {{ thread.id }} {{ thread.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag'

const openThreadsQuery = gql`
query{
  threads(input: {closed: false}){
    id
    title
    createdAt
    updatedAt
    closed
  }
}
`

export default {
  apollo: {
    threads: {
      prefetch: true,
      query: openThreadsQuery,
    },
  },
}
</script>
