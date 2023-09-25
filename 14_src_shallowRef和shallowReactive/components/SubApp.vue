<template>
  <h1>SubApp Component</h1>
  <h2>person: {{ person }}</h2>
  <h2>name: {{ name }}</h2>
  <h2>age: {{ age }}</h2>
</template>

<script>
import { ref, reactive, shallowReactive, shallowRef } from "vue";
export default {
  name: "SubApp",
  setup() {
    // 数据
    // let x = ref({
    //   y: 0
    // })
    // let person = reactive({
    //   name: "111",
    //   age: 12,
    //   job: {
    //     j1: {
    //       salary: 20,
    //     },
    //   },
    // });

    // -  如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===> shallowReactive。
    // -  如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> shallowRef。
    let x = shallowRef({
      y: 0,
    });
    // 只考虑第一层数据的响应式
    let person = shallowReactive({
      name: "111",
      age: 12,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // 返回一个对象
    return {
      x,
      person,
    };
  },
};
</script>

<style></style>
