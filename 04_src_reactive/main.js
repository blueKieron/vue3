// 引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from "vue";
import App from "./App.vue";

// 创建应用实例对象
createApp(App).mount("#app");

// new Vue({
//   render: h => h(App)
// }).$mount('#app')
