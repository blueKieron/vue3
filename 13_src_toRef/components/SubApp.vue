<template>
  <h1>SubApp Component</h1>
  <h2>person: {{ person }}</h2>
  <h2>name: {{ name }}</h2>
  <h2>age: {{ age }}</h2>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";
export default {
  name: "SubApp",
  setup() {
    // 数据
    let person = reactive({
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
      person,
      name: toRef(person, "name"),
      age: toRef(person, "age"),
      ...toRefs(person),
    };
  },
};
</script>

<style></style>
