<template>
  <header id="header">
    <h1 class="headline">
      <a>NESS</a>
    </h1>
    <ul class="nav-list">
      <router-link tag="li" id="home-nav" to="/" exact class="nav-list-item">
        <a> ホーム </a>
      </router-link>
    </ul>
  </header>
</template>

<script>
import 'vue-apollo';
import { Threads, Query } from '../graphql/gql-types';
// ↑自前定義していた interface の代わりに自動生成された型を使う。

export default {
  data() {
    return {
      threads: Threads
    };
  },
  apollo: {
    threads: {
      query: Query
    }
  }
};
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
