<template>
  <div class="card text-dark bg-light mt-2">
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h4 class="card-title">联系我们</h4>
      <p class="card-text">136901341@qq.com</p>
      <router-link :to="{name: 'phoneNumber'}">电话</router-link>
      <router-link :to="{name: 'personName'}">姓名</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: "contact"
    }
</script>

<style scoped>

</style>
