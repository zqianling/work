/*
 * @Descripttion: 
 * @version: 0.11
 * @Author: 前领
 * @Date: 2019-08-27 17:05:01
 * @copyright: Copyright (c) 2019,Hand
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(VueResource);
//自定义指令
Vue.directive('rainbow',{
  bind(el){
    el.style.color="#"+ Math.random().toString(16).slice(6,12);
  }
})
//自定义过滤器
// Vue.filter("snippet",function(value){
//   return value.slice(0,10)+'...';
// })
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
