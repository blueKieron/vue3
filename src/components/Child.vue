<template>
  <div class="Child">
    我是Child组件
    <div>{{ sum }}</div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Child",
  async setup() {
    let sum = ref(0);

    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ sum });
      }, 3000);
    });

    return await p;
  },
};
</script>
<style>
.Child {
  background-color: green;
  padding: 10px;
}
</style>
