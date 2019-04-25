<template>
  <div class="home">
    <Row style="height: 80%;">
      <Col span="12">col-12</Col>
      <Col span="12">col-12</Col>
    </Row>
    <br/>
    <Row>
      <Col span="8">col-8</Col>
      <Col span="8">col-8</Col>
      <Col span="8">col-8</Col>
    </Row>
    <br/>
    <Row>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
    </Row>

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
