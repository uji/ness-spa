<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <Thread></Thread>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Thread from "@/components/Thread.vue";

@Component({
  components: {
    HelloWorld,
    Thread
  }
})
export default class Home extends Vue {}
</script>
