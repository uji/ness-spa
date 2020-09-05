<template>
  <header id="header">
    <h1 class="headline">
      <slide></slide>
      <a>NESS</a>
    </h1>
    <ul class="nav-list">
      <router-link tag="li" id="home-nav" to="/" exact class="nav-list-item">
        <a> ホーム </a>
      </router-link>
    </ul>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Slide from "vue-burger-menu";

export default defineComponent({
  components: { Slide }
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
header {
  height: 100px;
  width: 100%;
  padding: 15px 0;
  background-color: #ffc738;
  color: black;
}
header .headline {
  line-height: 100px;
  float: left;
  font-size: 40px;
  margin-left: 50px;
}
.nav-list {
  line-height: 100px;
  float: left;
  margin-left: 30px;
  list-style: none;
}
.nav-list-item {
  list-style: none;
  display: inline-block;
  margin: 0 20px;
}
</style>
