import Vue from "vue";
import App from "./App.vue";
import router from "./route";
import store from "./store";
import axios from './utils/axios'

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import { Toast } from 'vant';
import 'vant/lib/index.css';
Vue.use(Toast);

import FastClick from "fastclick";
FastClick.attach(document.body);

Vue.config.productionTip = false;

Vue.prototype.axios = axios;
Vue.prototype.store = store;
Vue.prototype.extendObj = function (target, options) {
  for (name in options) {
    target[name] = options[name];
  }
  return target;
};

//未登陆时的token
localStorage.setItem('common_key', 'a0jDdd9Wto');

//动态设置title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
