import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/about/about'
export const routes =[
  {path:'/',component:Home},
  {path:'/admin',component:Admin},
  {path:'/menu',component:Menu},
  {path:'/login',component:Login},
  {path:'/register',component:Register},
  {path:'/about',component:About}
]
