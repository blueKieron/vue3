<template>
  <div class="App">
    我是App组件（父） {{ name }} -- {{ price }}
    <Child />
  </div>
</template>

<script>
import { reactive, provide, toRefs } from "vue";
import Child from "./components/Child.vue";
export default {
  name: "App",
  components: {
    Child,
  },
  setup() {
    let car = reactive({
      name: "benz",
      price: "40w",
    });

    // - 作用：实现祖与后代组件间通信
    // - 套路：父组件有一个 `provide` 选项来提供数据，后代组件有一个 `inject` 选项来开始使用这些数据
    provide("car", car);
    return {
      ...toRefs(car),
    };
  },
};
</script>
<style>
.App {
  background-color: gray;
  padding: 10px;
}
</style>
