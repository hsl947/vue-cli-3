import Vue from "vue";
import App from "./App.vue";
import router from "./route";
import store from "./store";
import axios from './utils/axios'

//复制功能组件
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

//vant的toast组件
import { Toast } from 'vant';
import 'vant/lib/index.css';
Vue.use(Toast);

//消除手机上的300ms延迟
import FastClick from "fastclick";
FastClick.attach(document.body);

//如果是开发环境，启用组件
if (process.env.NODE_ENV == "development"){
  //针对手机网页的前端开发者调试面板
  const VConsole = require("vconsole/dist/vconsole.min.js");
  const vConsole = new VConsole();
}

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$store = store;
Vue.prototype.$extend = function (target, options) {
  for (name in options) {
    target[name] = options[name];
  }
  return target;
};

//未登陆时的token
localStorage.setItem('common_key', 'a0jDdd9Wto');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
