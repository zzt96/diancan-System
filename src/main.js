import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routers'


Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode:'history'
})

// router.beforeEach((to,from,next)=>{
//   if(to.path== '/login' || to.path=='/register'){
//     next();
//   }else{
//     alert('请先登录!');
//     next('/login');
//   }
// })


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
