<template>
  <h1>SubApp Component</h1>
  <h2>sum: {{ sum }}</h2>
  <h2>name: {{ name }}</h2>
  <h2>age: {{ age }}</h2>
</template>

<script>
import { ref, reactive, toRefs, readonly, shallowReadonly } from "vue";
export default {
  name: "SubApp",
  setup() {
    // 数据
    let sum = ref(0);
    let person = reactive({
      name: "111",
      age: 12,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    sum = readonly(sum);
    person = shallowReadonly(person);

    // 返回一个对象
    return {
      sum,
      ...toRefs(person),
    };
  },
};
</script>

<style></style>
