<template>
  <h1>SubApp Component</h1>
  <h2>sum: {{ sum }}</h2>
  <h2>name: {{ name }}</h2>
  <h2>age: {{ age }}</h2>
  <button @click="showRawPerson">change age</button>
  <button @click="addCar">addCar</button>
  <button @click="changePrice">change price</button>
</template>

<script>
import { ref, reactive, toRefs, toRaw, markRaw } from "vue";
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
      car: {},
    });
    // - toRaw：
    // - 作用：将一个由```reactive```生成的响应式对象转为普通对象。
    // - 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。
    function showRawPerson() {
      const p = toRaw(person);
      p.age++;
      console.log(p);
    }

    // - markRaw：
    // - 作用：标记一个对象，使其永远不会再成为响应式对象。
    // - 应用场景:
    //   1. 有些值不应被设置为响应式的，例如复杂的第三方类库等。
    //   2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。
    function addCar() {
      let car = { name: "benz", price: 20 };
      person.car = markRaw(car);
    }

    function changePrice() {
      person.car.price++;
      console.log(person.car.price);
    }

    // 返回一个对象
    return {
      showRawPerson,
      addCar,
      changePrice,
      sum,
      ...toRefs(person),
    };
  },
};
</script>

<style></style>
