<template>
  <div class="post">
    <td>FBタイトル</td>
    <td>
      <input v-model="title" placeholder="title" />
    </td>
    <td>
      <button @click="createThread({ title: title })">
        投稿
      </button>
    </td>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export default defineComponent({
  setup() {
    const form = reactive({
      title: ''
    });
    const { mutate: createThread } = useMutation(gql`
      mutation createThread($title: String!) {
        createThread(input: { title: $title }) {
          id
          title
          closed
        }
      }
    `);

    return {
      ...toRefs(form),
      createThread
    };
  }
});
</script>

<style lang="scss">
.post {
  margin-top: 20px;
}
td {
  padding-left: 20px;
}
</style>
