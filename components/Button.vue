<template>
  <button
    class="transition px-7 py-2 font-bold rounded-full text-gray-600 bg-gray-100 ring-gray-300 ring-1 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50"
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
