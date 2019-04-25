<template>
  <div class="home">
    <img class="logo" src="../assets/paper-plane.svg" alt=" ：）"/>
    <!--<FirstPage />-->
  </div>
</template>

<script>
// @ is an alias to /src
// import FirstPage from '@/components/FirstPage.vue'
export default {
  name: 'home'
  // components: {
  //   FirstPage
  // }
}
</script>
<style scoped>
  .home{
    height: 100%;
    background:url("../assets/home.svg") bottom center no-repeat;
    background-size:100% 108%;
  }
  .logo{
    width: 47px;
    height: 47px;
    border-radius: 5px;
    float: left;
    position: relative;
    top: 30px;
    left: 45px;
  }
</style>
