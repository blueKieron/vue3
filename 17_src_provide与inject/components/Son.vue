<template>
  <div class="Son">我是Son组件（孙） {{ car.name }} -- {{ car.price }}</div>
</template>

<script>
import { inject, reactive } from "vue";
export default {
  name: "Son",
  setup() {
    let car = inject("car");

    return {
      car,
    };
  },
};
</script>
<style>
.Son {
  background-color: yellow;
  padding: 10px;
}
</style>
