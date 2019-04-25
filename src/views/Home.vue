<template>
  <div class="home">
    <Row style="height: 80%;">
      <Col span="12"><img class="logo" src="../assets/paper-plane.svg" alt=" ：）"/></Col>
      <Col span="12"><Button @click="goinfo">xxxxx</Button></Col>
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

export default {
  name: 'home',
  components: {
  },
  methods: {
    goinfo () {
      this.$router.push({ path: '/todo', name: 'todo' })
    }
  }
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
