<template>
  <div class="flex items-center mt-2 border px-4 py-2 rounded">
    <div class="mr-4 tracking-wide">
      {{ title }}
    </div>
    <GoodButton good-num="10" class="ml-auto" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>
