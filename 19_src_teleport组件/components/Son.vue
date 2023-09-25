<template>
  <div class="Son">我是Son组件</div>
  <Dialog />
</template>

<script>
import Dialog from "./Dialog.vue";
export default {
  name: "Son",
  components: {
    Dialog,
  },
};
</script>
<style>
.Son {
  background-color: yellow;
  padding: 10px;
}
</style>
