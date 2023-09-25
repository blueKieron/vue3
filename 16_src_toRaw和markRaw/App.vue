<template>
  <button @click="isShow = !isShow">切换</button>
  <SubApp v-if="isShow" />
</template>

<script>
import { ref } from "vue";
import SubApp from "./components/SubApp.vue";

export default {
  name: "App",
  components: {
    SubApp,
  },

  setup() {
    let isShow = ref(true);

    return {
      isShow,
    };
  },
};
</script>

<style></style>
