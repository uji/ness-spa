<template>
  <div class="home">
    <oneThread />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import oneThread from "@/components/oneThread.vue"; // @ is an alias to /src

export default defineComponent({
  components: { oneThread }
});
</script>
