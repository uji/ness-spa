<template>
  <button
    class="px-5 pt-1 pb-2 m-1 font-bold rounded-full text-white ring-1 bg-secondary-400 ring-gray-300 hover:bg-secondary-500 focus:ring-secondary-600 focus:outline-none focus:ring-2 focus:ring-opacity-50"
    @click="clickEvent"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup(_, { emit }) {
    const clickEvent = () => {
      emit('click')
    }
    return {
      clickEvent,
    }
  },
})
</script>
