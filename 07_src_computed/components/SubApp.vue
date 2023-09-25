<template>
  <h1>SubApp Component</h1>
  first: <input type="text" v-model="person.first" />
  <br />
  last: <input type="text" v-model="person.last" />
  <br />
  <span>全名：{{ person.fullName }}</span>
  change: <input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "SubApp",
  // computed: {
  //   fullName() {
  //     return this.person.first + " " + this.person.last;
  //   },
  // },
  setup() {
    // 数据
    const person = reactive({
      first: "zhang",
      last: "san",
    });

    //computed简写
    // person.fullName = computed(() => {
    //   return person.first + person.last
    // })

    //computed完整
    person.fullName = computed({
      get() {
        return person.first + "-" + person.last;
      },
      set(value) {
        const nameArr = value.split("-");
        person.first = nameArr[0];
        person.last = nameArr[1];
      },
    });

    // 返回一个对象
    return {
      person,
    };
  },
};
</script>

<style></style>
