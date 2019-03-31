// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

// 引入路由配置
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
    // return { x:0,y:100 }
    // return {selector:'.btn'}
    if (savedPosition) {
      return savedPosition;
    } else {
      return {x:0,y:0}
    }
  }
})

// 全局守卫
// router.beforeEach((to,from,next)=>{
//   // alert("还没有登陆，请先登陆");
//   // next();
//   // console.log(to);

//   // 判断store.gettes.isLogin === false
//   if (to.path == '/login' || to.path == '/register') {
//     next();
//   } else {
//     alert('还没有登陆，请先登陆');
//     next('/login');
//   }
// })

// 后置钩子
// router.afterEach((to,from)=>{
//   alert('after each');
// })



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
