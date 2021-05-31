<template>
  <div>
    <div
      class="flex flex-col md:flex-row items-end md:items-end md:justify-end divide-y-2 md:divide-y-0"
    >
      <div>
        <text-button text="Open" class="content-start"></text-button>
        <text-button text="Close" class="content-start"></text-button>
      </div>
      <ActionPlan />
      <NarrowingDown />
    </div>
    <div v-for="thread in threads" :key="thread.id">
      <Thread :title="thread.title" good-num="10" class="mt-2" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    threads: {
      type: Array,
      required: true,
    },
  },
}
</script>
