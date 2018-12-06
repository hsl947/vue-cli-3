import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: 'index',
      component: resolve => require(["../views/Home"], resolve),
      meta: {
        index: 0, //页面的深度，来判断使用的过渡动画
        title: '首页'
      },
      children: []
    },
    {
      path: "/login",
      name: 'login',
      component: resolve => require(["../views/login"], resolve),
      meta: {
        index: 1,
        title: '登录'
      },
      children: []
    },
    {
      path: "/register",
      name: 'register',
      component: resolve => require(["../views/register"], resolve),
      meta: {
        index: 1,
        title: '注册',
        // requireAuth: true
      },
      children: []
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
  //这里的requireAuth为路由中定义的 meta:{requireAuth:true}，
  //意思为：该路由添加该字段，表示进入该路由需要登陆的
    if (store.state.token) {
      next();
    } else {
      next({
        name: 'login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next();
  }
});

export default router;
