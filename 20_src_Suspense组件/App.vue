<template>
  <div class="App">
    我是App组件
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>稍等..</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// 静态引入
// import Child from "./components/Child.vue";

//异步引入
import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./components/Child.vue"));
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
