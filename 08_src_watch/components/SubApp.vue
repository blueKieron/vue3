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
    let person = reactive({
      name: "111",
      age: 12,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // 情况一：监视ref所定义的一个响应式数据
    watch(
      sum,
      (newValue, oldValue) => {
        console.log(`sum change, ${newValue} ${oldValue}`);
      },
      { immediate: true }
    );

    // 情况二：监视ref所定义的多个响应式数据
    watch(
      [sum, msg],
      (newValue, oldValue) => {
        console.log(`sum and msg change, ${newValue} ${oldValue}`);
      },
      { immediate: true }
    );

    // 情况三： 监视reactive所定义的一个响应式数据，
    // 注意：
    // 1.此处无法正确的获取oldValue
    // 2.强制开启了深度监视（deep配置无效）
    watch(person, (newValue, oldValue) => {
      console.log("person change!");
    });

    //情况四：监视reactive所定义的一个响应式数据中的某个属性
    watch(
      () => person.age,
      (newValue, oldValue) => {
        console.log("person.age change");
      }
    );

    // 情况五：监视reactive所定义的一个响应式数据中的某些属性
    watch([() => person.age, () => person.name], (newValue, oldValue) => {
      console.log("person.name or person.age change");
    });

    // 特殊情况：
    watch(
      () => person.job,
      (newValue, oldValue) => {
        console.log("person.job change");
      },
      {
        deep: true,
      }
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
