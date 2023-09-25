<template>
  <div class="Child">
    我是Child组件
    <Son />
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  name: "Child",
  components: {
    Son,
  },
};
</script>
<style>
.Child {
  background-color: green;
  padding: 10px;
}
</style>
