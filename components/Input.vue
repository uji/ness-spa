<template>
  <input
    class="border w-full p-2 mb-4 border-gray-300 rounded-md focus focus:outline-none focus:border-yellow-400"
    :placeholder="placeholder"
    :type="inputType"
  />
</template>

<script lang="ts">
export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "text"
    }
  }
}
</script>
