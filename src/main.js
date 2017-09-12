import Vue from 'vue'
import $ from 'jquery'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/router'
import './config/rem'
import  { ToastPlugin } from 'vux'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(ToastPlugin)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)
// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function() {
//     FastClick.attach(document.body);
//   }, false);
// }

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
