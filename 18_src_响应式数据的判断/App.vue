<template>
  <div class="App">我是App组件（父） {{ name }} -- {{ price }}</div>
</template>

<script>
import {
  ref,
  reactive,
  readonly,
  toRefs,
  isRef,
  isReadonly,
  isProxy,
  isReactive,
} from "vue";
export default {
  name: "App",
  setup() {
    let sum = ref(0);
    let car = reactive({
      name: "benz",
      price: "40w",
    });
    let car2 = readonly(car);

    // - isRef: 检查一个值是否为一个 ref 对象
    // - isReactive: 检查一个对象是否是由 `reactive` 创建的响应式代理
    // - isReadonly: 检查一个对象是否是由 `readonly` 创建的只读代理
    // - isProxy: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理
    console.log(isRef(sum));
    console.log(isReactive(car));
    console.log(isReadonly(car2));
    console.log(isProxy(car));

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
