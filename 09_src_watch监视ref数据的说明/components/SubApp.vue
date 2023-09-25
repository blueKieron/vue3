<template>
  <h1>SubApp Component</h1>
  <h2>sum: {{ sum }}</h2>
  <button @click="sum++">+1</button>
  <hr />
  <h2>msg: {{ msg }}</h2>
</template>

<script>
import { reactive, ref, watch } from "vue";
export default {
  name: "SubApp",
  // vue2 watch
  // watch: {
  //   sum(newValue, oldValue) {
  //     console.log(`sum change,${newValue} ${oldValue}`);
  //   },
  //   sum: {
  //     immediate: true,
  //     deep: true,
  //     handler(newValue, oldValue) {
  //       console.log(`sum change,${newValue} ${oldValue}`);
  //     },
  //   },
  // },
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref("hello");
    let person = ref({
      name: "111",
      age: 12,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    watch(person.value, (newValue, oldValue) => {
      console.log("person change!");
    });

    watch(
      person,
      (newValue, oldValue) => {
        console.log("person change!");
      },
      { deep: true }
    );

    // 返回一个对象
    return {
      sum,
      msg,
    };
  },
};
</script>

<style></style>
