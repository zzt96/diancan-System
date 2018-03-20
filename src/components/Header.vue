<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a href="#" class="navbar-brand">pizza点餐系统</a>
      <ul class="navbar-nav">
        <li>
          <!--<router-link :to="homeLink" class="nav-link">主页</router-link>-->
          <router-link :to="{name: 'homeLink'}" class="nav-link">主页</router-link>
        </li>
        <li>
          <router-link :to="{name: 'menuLink'}" class="nav-link">菜单</router-link>
        </li>
        <li>
          <router-link :to="{name: 'adminLink'}" class="nav-link">管理</router-link>
        </li>
        <li>
          <router-link :to="{name: 'aboutLink'}" class="nav-link">关于</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li>
          <router-link :to="{name: 'loginLink'}" class="nav-link">登陆</router-link>
        </li>
        <li>
          <router-link :to="{name: 'registerLink'}" class="nav-link">注册</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "appHeader",
    data() {
      return{
        // homeLink:'/'
      }
    }
  }
</script>

<style scoped>

</style>
