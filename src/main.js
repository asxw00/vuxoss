// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import FastClick from 'fastclick'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import { AlertPlugin, ToastPlugin,AjaxPlugin  } from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(AjaxPlugin)
Vue.use(Vuex)
FastClick.attach(document.body)


//router文件夹 index.js
//import VueRouter from 'vue-router'
//import Home from './components/HelloFromVux'
//Vue.use(VueRouter)
//const routes = [{
//path: '/',
//component: Home
//}]
//
//const router = new VueRouter({
//routes
//})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
