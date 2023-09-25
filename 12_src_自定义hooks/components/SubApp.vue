<template>
  <h1>SubApp Component</h1>
  <h2>sum: {{ sum }}</h2>
  <button @click="sum++">+1</button>
  <div>click coordinate: x:{{ point.x }} y:{{ point.y }}</div>
</template>

<script>
import { ref } from "vue";
import usePoint from "../hooks/usePoint";
export default {
  name: "SubApp",

  setup() {
    console.log("setup");
    // 数据
    let sum = ref(0);
    let point = usePoint();

    // 返回一个对象
    return {
      sum,
      point,
    };
  },
};
</script>

<style></style>
