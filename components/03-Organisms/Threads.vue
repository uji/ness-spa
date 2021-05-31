<template>
  <div>
    <div
      class="flex flex-col md:flex-row items-end md:items-end md:justify-end divide-y-2 md:divide-y-0"
    >
      <div class="flex">
        <text-button text="Open"></text-button>
        <text-button text="Close"></text-button>
      </div>
      <!-- <ActionPlan class="mr-2" /> -->
      <NarrowingDown class="mr-2" />
      <CreateThreadButton class="mt-2" />
    </div>
    <div v-for="thread in threads" :key="thread.id">
      <Thread :title="thread.title" good-num="10" class="mt-2" />
    </div>
    <Pagination class="mt-2 justify-end ml-auto" />
  </div>
</template>

<script lang="ts">
import Pagination from '../02-Molecules/Pagination.vue'
export default {
  components: { Pagination },
  props: {
    threads: {
      type: Array,
      required: true,
    },
  },
}
</script>
