import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/about/About'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

export const routes = [
  {path: '/', name: 'homeLink', component: Home},
  {
    path: '/admin', name: 'adminLink', component: Admin,
    // beforeEnter: (to, from, next) => {
    //路由独享守卫
    // alert('非登陆不能访问');
    // next(false)
    //   if (to.path == '/login' || to.path == '/register') {
    //     next();
    //   } else {
    //     alert('请先登录!');
    //     next('/login');
    //   }
    // }
  },
  {path: '/menu', name: 'menuLink', component: Menu},
  {path: '/login', name: 'loginLink', component: Login},
  {path: '/register', name: 'registerLink', component: Register},
  {
    path: '/about', name: 'aboutLink', redirect: '/about/contact', component: About, children: [
      {
        path: '/about/contact', name: 'contactLink', redirect: '/phone', component: Contact, children: [
          {path: '/phone', name: 'phoneNumber', component: Phone},
          {path: '/personName', name: 'personName', component: PersonName}
        ]
      },
      {path: '/about/Delivery', name: 'deliveryLink', component: Delivery},
      {path: '/about/History', name: 'historyLink', component: History},
      {path: '/about/OrderingGuide', name: 'orderinGuideLink', component: OrderingGuide},
    ]
  },
  {path: '*', redirect: '/'}

]
