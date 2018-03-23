
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
## 代码块

## NUXT路由配置
