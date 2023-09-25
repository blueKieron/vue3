<template>
  <h1>SubApp Component</h1>
  <h2>sum: {{ sum }}</h2>
  <button @click="sum++">+1</button>
  <hr />
  <h2>msg: {{ msg }}</h2>
</template>

<script>
import { reactive, ref, watch, watchEffect } from "vue";
export default {
  name: "SubApp",
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref("hello");
    let person = reactive({
      name: "111",
      age: 12,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    // - watch的套路是：既要指明监视的属性，也要指明监视的回调。
    // - watchEffect的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。

    // - watchEffect有点像computed：
    //   - 但computed注重的计算出来的值（回调函数的返回值），所以必须要写返回值。
    //   - 而watchEffect更注重的是过程（回调函数的函数体），所以不用写返回值。
    watchEffect(() => {
      const x = sum.value;
      console.log("watchEffect..");
    });

    // 返回一个对象
    return {
      sum,
      msg,
    };
  },
};
</script>

<style></style>
