import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// css
import './assets/css/reset.css' //重置全局默认样式
import './assets/css/icon/iconfont.css' //字体css引入

// js
import './components/regeistComponents'; //注册通用组件

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
