<template>
  <h1>Admin</h1>
</template>

<script>
  export default {
    name: "admin",
    data() {
      return {
        name: "ZZT"
      }
    },
    //进入组件之前的守卫
    // beforeRouteEnter: (to, from, next) => {
    //   // alert("hello " + this.name);//不能得到name（数据渲染之前）
    // //解决办法：使用next回调函数，异步获取数据,当这个方法执行的时候，数据已经渲染完了，所以可以用vm获得姓名
    //   next(vm=>{
    //     alert("hello " + vm.name)
    //   })
    // }

    //离开组件时候的守卫
    beforeRouteLeave : (to, from, next) => {
    if(confirm("确定离开嘛？")==true){
      next();
    }else{
      next(false);
    }
    }

  }
</script>

<style scoped>

</style>
