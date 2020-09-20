<template>
  <div class="home">
    <!-- <oneThread /> -->
    <div v-if="loading">Loading...</div>
    <ul v-else-if="result">
      <li v-for="thread of result.threads" :key="thread.id">
        {{ thread.id }} {{ thread.title }} {{ thread.closed }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
// import oneThread from '@/components/oneThread.vue'; // @ is an alias to /src
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
// import { Thread } from '@/graphql/gql-types';

export default defineComponent({
  // components: { oneThread },
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
        console.log(v.threads[0].title, 'watch');
      }
    );
    return {
      result,
      loading
    };
  }
});
</script>
