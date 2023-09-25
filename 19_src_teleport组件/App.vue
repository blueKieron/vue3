<template>
  <div class="App">
    我是App组件
    <Child />
  </div>
</template>

<script>
import Child from "./components/Child.vue";
export default {
  name: "App",
  components: {
    Child,
  },
};
</script>
<style>
.App {
  background-color: gray;
  padding: 10px;
}
</style>
