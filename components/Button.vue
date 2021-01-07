<template>
  <button
    @click="clickEvent"
    class="bg-blue-500 hover:bg-blue-700 focus:ring-blue-600 text-white font-bold px-5 pt-1 pb-2 rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const clickEvent = () => {
      emit('click')
    }
    return {
      clickEvent,
    }
  }
})
</script>
