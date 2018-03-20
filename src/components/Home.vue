<template>
  <div>
    <h1>home</h1>
    <button @click="goTomenu" class="btn btn-success">let`s Order pizza</button>
  </div>
</template>

<script>
  export default {
    name: "home",
    methods:{
      goTomenu(){
        //跳转到上一次浏览的页面
        //this.$router.go(-1)
        //指定跳转的地址
        //this.$router.replace('/menu')
        //指定跳转到路由的名字下
        //this.$router.replace({name:'menuLink'})
        //通过push跳转
        //this.$router.push('/menu')
        this.$router.push({name:'menuLink'})
      }
    }
  }
</script>

<style scoped>

</style>
