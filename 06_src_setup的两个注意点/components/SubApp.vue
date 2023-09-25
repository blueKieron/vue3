<template>
  <h1>SubApp Component</h1>
  <h3>type: {{ job.type }}</h3>
  <h3>salary: {{ job.salary }}</h3>
  <button @click="test">触发父组件自定义事件</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "SubApp",
  props: ["msg", "school"],
  emits: ["hello"],
  // - setup执行的时机
  // - 在beforeCreate之前执行一次，this是undefined。
  setup(props, context) {
    console.log(props);
    console.log(context.attrs); // vue2中的$attrs
    console.log(context.emit); // 触发自定义事件
    console.log(context.slots); // 插槽
    // 数据
    const job = reactive({
      type: "fontend",
      salary: "12",
    });

    function test() {
      context.emit("hello", 99);
    }

    // 返回一个对象
    return {
      job,
      test,
    };
  },
};
</script>

<style></style>
