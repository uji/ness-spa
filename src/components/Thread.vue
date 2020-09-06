<template>
  <div v-if="loading">Loading...</div>
  <ul v-else-if="result && result.users">
    <li v-for="thread of result.threads" :key="thread.id">
      {{ thread.id }} {{ thread.title }} {{ thread.closed }}
    </li>
  </ul>
</template>

<script>
import { useQuery } from "@vue/apollo-composable";
import { Vue } from "vue-property-decorator";
import gql from "graphql-tag";

export default class Thread extends Vue {
  setup() {
    const { result, loading } = useQuery(gql`
      query {
        threads {
          id
          title
          closed
        }
      }
    `);
    return {
      result,
      loading
    };
  }
}
</script>
