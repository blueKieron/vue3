<template>
  <h1>App Component</h1>
  <h2>name: {{ name }}</h2>
  <h2>age: {{ age }}</h2>
</template>

<script>
import { h } from "vue";
export default {
  name: "App",
  // 1. 尽量不要与Vue2.x配置混用
  //     - Vue2.x配置（data、methos、computed...）中可以访问到setup中的属性、方法。
  //     - 但在setup中不能访问到Vue2.x配置（data、methos、computed...）。
  //     - 如果有重名, setup优先。
  //  2. setup不能是一个async函数，因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性。（后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合）
  data() {
    return {
      sex: "male",
    };
  },
  methods: {
    sayWelcome() {
      console.log(this.sex, this.name, this.sayHello);
    },
  },
  // 不考虑响应式
  setup() {
    // 数据
    let name = "xxx";
    let age = 18;

    // 方法
    function sayHello() {
      console.log("111", name, age);
    }

    // 返回一个对象
    return {
      name,
      age,
      sayHello,
    };

    // 返回一个函数（渲染函数）
    // return () => h("h1", "yyy");
  },
};
</script>

<style></style>
