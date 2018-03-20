<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import header from './components/Header.vue'

  export default {
    name:"App",
    components: {appHeader: header}
  }
</script>

<style>

</style>
