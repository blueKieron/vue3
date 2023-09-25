<template>
  <SubApp msg="hello" school="aaa" @hello="showHello">
    <template v-slot:qwe>
      <span>sss</span>
    </template>
  </SubApp>
</template>

<script>
import SubApp from "./components/SubApp.vue";

export default {
  name: "App",
  components: {
    SubApp,
  },
  setup() {
    function showHello(value) {
      console.log(`触发了showHello事件，参数是${value}`);
    }

    return {
      showHello,
    };
  },
};
</script>

<style></style>
