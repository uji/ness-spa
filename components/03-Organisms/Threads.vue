<template>
  <div>
    <div
      class="flex flex-col md:flex-row items-end md:items-end md:justify-end divide-y-2 md:divide-y-0"
    >
      <div class="flex">
        <TextButton text="Open"></TextButton>
        <TextButton text="Close"></TextButton>
      </div>
      <!-- <ActionPlan class="mr-2" /> -->
      <TextFilter class="mr-2" />
      <GorgeousButton text="New" class="mt-2" @click="openModal" />
      <CreateThreadModal
        v-if="showModal"
        @hidden="closeModal"
        @ok="closeModal"
      />
    </div>
    <div v-for="thread in threads" :key="thread.id">
      <Thread :title="thread.title" good-num="10" class="mt-2" />
    </div>
    <Pagination class="mt-2 justify-end ml-auto" />
  </div>
</template>

<script lang="ts">
import { ref, inject } from '@vue/composition-api'
import { createThreadKey } from '@/plugins/provide'
export default {
  props: {
    threads: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const createThread = inject(createThreadKey)
    if (!createThread) {
      throw new Error('createThread is not provide')
    }
    const showModal = ref(false)
    const openModal = () => {
      showModal.value = true
    }
    const closeModal = () => {
      showModal.value = false
    }

    return {
      showModal,
      openModal,
      closeModal,
      // createThreadFunc,
      // result,
    }
  },
}
</script>
