<template>
  <div class="home">
    <!-- <oneThread /> -->
    <div v-if="loading">Loading...</div>
    <ul v-else-if="result">
      <li v-for="thread of result.threads" :key="thread.id">
        <td>{{ thread.id }}</td>
        <td>{{ thread.title }}</td>
        <td>{{ thread.closed }}</td>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export default defineComponent({
  setup() {
    const { result, loading } = useQuery(gql`
      query threads {
        threads {
          id
          title
        }
      }
    `);

    watch(
      () => result.value,
      (v) => {
        console.log(v, 'watch');
      }
    );
    return {
      result,
      loading
    };
  }
});
</script>

<style lang="scss">
.home {
  margin-top: 20px;
}
td {
  padding-left: 20px;
}
</style>
