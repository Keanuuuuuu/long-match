import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/base-reset.css'; // 引入自定义的基础样式文件

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
