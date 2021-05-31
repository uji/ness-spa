<template>
  <div class="flex items-center px-4 py-2 border rounded">
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
    goodNum: {
      type: String,
      required: true,
    },
  },
})
</script>
