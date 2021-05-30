<template>
  <div
    class="inline-block mr-2 p-2 cursor-pointer text-gray-500 hover:text-gray-800"
  >
    {{ text }}
  </div>
</template>

<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
