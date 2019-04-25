<template>
  <div style="width: 100%;height: 100%;">
  <div class="home1">
    <div class="home2">

    <Row class="r" style="padding-top: 3.5%">
      <Col span="12"><img class="logo" src="../assets/paper-plane.svg" alt=" ：）" /></Col>

      <Col span="2"><U  style="color:#2d8cf0" class="hrefTexe">Home</U></Col>
      <Col span="2"><U  style="color:#2d8cf0" class="hrefTexe">打卡签到</U></Col>
      <Col span="2"><U  class="hrefTexe">今日单词</U></Col>
      <Col span="2"><U  class="hrefTexe">信息推送</U></Col>

      <Col span="3">
        <Button  class="button" type="primary" shape="circle"  @click="gologin">
          <B class="buttontext">Sing in</B></Button></Col>
      <Col span="1"></Col>
    </Row>
    <br/>
    <Row class="r">
      <Col span="8">&nbsp;</Col>
      <Col span="8">&nbsp;</Col>
      <Col span="8">&nbsp;</Col>
    </Row>
    <br/>
    <Row class="r">
      <Col span="2" >&nbsp;</Col>
      <Col span="2" ><Button icon='md-contact' class="buttoncenter" type="primary" shape="circle">登录</Button></Col>
      <Col span="2" ><Button icon='ios-hammer' class="buttoncenter" shape="circle">作者的blog</Button></Col>
      <Col span="2" ><Button icon='md-bookmarks' class="buttoncenter" shape="circle">使用说明</Button></Col>
      <Col span="2" ><Button icon='logo-github' class="buttoncenter" shape="circle">github</Button></Col>
      <Col span="14"></Col>

    </Row>
      <Row class="r">
        <Col span="6">&nbsp;</Col>
        <Col span="6">&nbsp;</Col>
        <Col span="6">&nbsp;</Col>
        <Col span="6">&nbsp;</Col>
      </Row>

    <!--<FirstPage />-->
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  methods: {
    gologin () {
      this.$router.push({ path: '/login', name: 'login' })
    }

  }
}
</script>
<style scoped>
  .home1{

    height: 100%;
    width: 100%;
    background:url("../assets/home1.svg") no-repeat right center;

  }
  .home2{

    height: 100%;
    width: 100%;
    background:url("../assets/home2.svg") no-repeat left bottom;
    background-size: 22%;
  }
  .logo{
    width: 10%;
    height: 10%;
    border-radius: 5px;
    float: left;
    position: relative;
    top:  -50%;
    left: 10%;
    cursor:pointer
  }
  .button{

    position: relative;
  height: 100%;
  width: 70%;
  }
  .buttoncenter{
    position: relative;
    height: 100%;
    width: 90%
  }
  .buttontext{
  font-size:18px;
    font-weight:bold;
  color: #ffffff;
  }
  .r{
    height: 24%;
  }
  .hrefTexe{
    font-size:18px;

    /*font-weight:bold;*/
    color: #ffffff;

  }
</style>
