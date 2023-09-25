<template>
  <h1>App Component</h1>
  <h2>name: {{ name }}</h2>
  <h2>age: {{ age }}</h2>
  <h3>type: {{ job.type }}</h3>
  <h3>salary: {{ job.salary }}</h3>
  <button @click="change">change</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let name = ref("xxx");
    let age = ref(18);
    const job = ref({
      type: "fontend",
      salary: "12",
    });

    function change() {
      name.value = "yyy";
      job.value.type = "backend";
      job.value.salary = "124";
    }

    // 返回一个对象
    return {
      name,
      age,
      job,
      change,
    };
  },
};
</script>

<style></style>
