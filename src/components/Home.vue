<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎前来品尝美味的Pizza！</h1>
        <h2>最美味，秋季，新品</h2>
        <button @click="goTomenu" class="btn btn-success">let`s Order pizza</button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "home",
    methods: {
      goTomenu() {
        //跳转到上一次浏览的页面
        //this.$router.go(-1)
        //指定跳转的地址
        //this.$router.replace('/menu')
        //指定跳转到路由的名字下
        //this.$router.replace({name:'menuLink'})
        //通过push跳转
        //this.$router.push('/menu')
        this.$router.push({name: 'menuLink'})
      }
    }
  }
</script>

<style scoped>
  #home {
    background: url('../../src/assets/pizza.jpg');
    height: 90vh;
    padding: 10%;
  }
  h1,h2{
    margin: 6%;
  }
  .background{
    background: #eee;
    opacity: 0.7;
    max-weight:70vw;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>
