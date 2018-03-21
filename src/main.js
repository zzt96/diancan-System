import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'


Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    // return{x:0,y:100}
  // return{ selector:".btn"}
  if(savedPosition){//用浏览器的前进后退来控制
    return savedPosition
  } else{
    return{x:0,y:0}
  }
  }
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
