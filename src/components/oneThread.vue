<template>
  <ul v-if="result && result.threads">
    <li v-for="thread of result.threads" :key="thread.id">
      {{ thread.id }} {{ thread.title }} {{ thread.closed }}
    </li>
  </ul>
</template>

<script>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default {
  setup() {
    const { result } = useQuery(gql`
      query {
        threads {
          id
          title
          closed
        }
      }
    `);
    return {
      result
    };
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
