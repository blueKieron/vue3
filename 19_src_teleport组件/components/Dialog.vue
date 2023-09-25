<template>
  <div>
    <button @click="isShow = true">show</button>
    <teleport to="body">
      <div v-if="isShow" class="mask">
        <div class="dialog">
          <h2>我是弹窗</h2>
          <h3>巴拉巴拉</h3>
          <h3>巴拉巴拉</h3>
          <button @click="isShow = false">hide</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Son",
  setup() {
    let isShow = ref(false);

    return {
      isShow,
    };
  },
};
</script>
<style>
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background-color: gold;
  padding: 10px;
}
</style>
