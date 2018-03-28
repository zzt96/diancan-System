
# Vue学习   
根据教学视频，建立一个pizza的在线点餐系统
## 实现功能
创建组件：  
主页，菜单，管理，关于；  
注册与登陆。  
## 学习知识点
本例子的学习知识点有：  
- 路由的配置
  - 配置路由跳转
  - 路由的redirect和tag
  - 路由name属性
  - 二级三级路由
  - 导航守卫
  - 复用router-view
  - 路由控制滚动行为 scrollBehavior
-  未完待续
### 基础知识
#### route, routes, router
- route是一条路由，从A跳转至B是一条route
- routes是一组路由，复数，所以是很多个route的集合
- router是一个管理者，来管理整个路由（routes只是定义了一组路由，而router在请求过来的时候去进行处理（到routes找匹配请求的路由）
### 路由配置步骤
1. npm install vue-router --save
2. import路由模块，import组件模块
3. Vue.use(router)
4. 一个route的定义：在vue中，由两个部分组成：path和component，path就是自己定义的路径（在nuxt中会根据你设计的文件夹结构帮助你定义好路径）（在之后router-link的to属性中可以直接使用这个定义的路径找到页面）另一个是组件，就是路由要跳转到的目的地（可以是子组件哦）
5. route长啥样：
```
{ path: '/home', component: Home },
```
6. routes就是一组上面的route；这是一个数‘组’哦 
```
const routes =[  
{ path: '/home', component: Home },  
{ path: '/center', component: center },  
{ path: '/news', component: news },  
]
```
7. 创建路由对路由进行管理：使用new VueRoute方法，再把一个routes对象扔进去（所以外面有{}花括号）
```
const router = new VueRouter({
      routes // routes: routes 的简写
})
```
8. 最后，将这个router给注入到vue根实例中（就是最大的那个vue，天王老子）
```
const app = new Vue({
  router
}).$mount('#app')
```
9. 现在可以使用路由啦，在要用路由的地方写上router-link标签，里面的to="here is path"写上路径，然后在使用这个router-link标签的时候，router就回帮你找到与此路径匹配的component，（在routes里找啊）然后渲染到router-view（子组件）或者跳到另一个页面，比如：
```
<router-link :to="{'/homeLink'}" class="nav-link">主页</router-link>
```
关于路由设置的详细的代码到main.js(router的引用和注入根组件)以及routes.js(一组route配置的集合)里去看

### 路由小细节（redirect和tag）
#### tag
<router-link>默认的是嵌套成a标签，如果想要自定义其标签形式，则使用tag：  
如：tag="li"则将其设定为li标签  
tag="tr"则将其设定为tr标签  
#### redirect
routes中重定向，设定一个路由：{path:'*',redirect:'/'} *表示所有，如果没有匹配到上面其他的路由，则path会导向到这个路由上，redirct会将其重定向至/的位置
> ps.router-link :to="homelink"即为使用动态属性，  
> 一般在data中赋予homelink值

### 路由name属性
1. 给一个路由取个名字（menuLink）{path: '/menu', name: 'menuLink', component: Menu},
2. 使用：<router-link :to="{name: 'menuLink'}">
3. 注意to前面的冒号（属性绑定v-model）以及name属性是用花括号括起来的
4. 跳转到 '/menu'这个路径

### 二级三级路由
children :[]属性中写，对应的路由
<router-view></router-view>显示子组件

## 补充：路由守卫
```
//这一行代码在进入之前会提示非登陆不能访问，如果跳转的路径是去login或者是register，则允许通过（ next() )这个守卫是写在配置路由中，也可以写在组件之内。
 {
 path: '/admin', name: 'adminLink', component: Admin,
     beforeEnter: (to, from, next) => {
    //路由独享守卫
     alert('非登陆不能访问');
     next(false)
       if (to.path == '/login' || to.path == '/register') {
         next();
       } else {
         alert('请先登录!');
         next('/login');
       }
     }
     }
 ```
## 代码块

## NUXT路由配置
