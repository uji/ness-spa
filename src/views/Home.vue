<template>
  <div class="home">
    <!-- <oneThread /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
// import oneThread from '@/components/oneThread.vue'; // @ is an alias to /src
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export default defineComponent({
  // components: { oneThread },
  setup() {
    console.log(gql`
      query threads {
        threads {
          id
          title
        }
      }
    `);
    const { result } = useQuery(gql`
      query threads {
        threads {
          id
          title
        }
      }
    `);
    console.log(result);

    watch(
      () => result.value,
      (v) => {
        console.log(v);
      }
    );
  }
});
</script>
