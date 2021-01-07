<template>
  <input
    v-model.trim="result"
    class="border w-full p-2 mb-4 border-gray-300 rounded-md focus focus:outline-none focus:border-yellow-400"
    :placeholder="placeholder"
    :type="inputType"
    @input="inputEvent"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    inputType: {
      type: String,
      default: 'text',
    },
  },
  setup(props, { emit }) {
    const result = ref('')

    const inputEvent = () => {
      emit('input', result.value)
    }

    return {
      result,
      inputEvent,
    }
  },
})
</script>
