<template>
  <div style="width: 100%;height: 100%;">
  <div class="home1">
    <div class="home2">

    <Row type="flex" align="middle" style="height: 18%" >
      <Col span="1">&nbsp;</Col>
      <Col span="1"><img class="logo" src="../assets/paper-plane.svg" alt=" ：）" /></Col>
      <Col span="1">&nbsp;</Col>
      <Col span="4"><B  style="color:#2b85e4;font-size: 39px" class="hrefTexe">Just Do It</B></Col>
      <Col span="5">&nbsp;</Col>
      <Col span="2"><B  style="color:#2b85e4" class="hrefTexe">Home</B></Col>
      <Col span="2"><B   class="hrefTexe">打卡签到</B></Col>
      <Col span="2"><B  class="hrefTexe">今日单词</B></Col>
      <Col span="2"><B  class="hrefTexe">信息推送</B></Col>

      <Col span="3">
        <Button  class="button" type="primary" shape="circle"  @click="gologin">
          <B class="buttontext">Sing in</B></Button></Col>
      <Col span="1"></Col>
    </Row>
    <br/>
    <Row type="flex" align="bottom" style="height: 40%">
      <Col span="1">&nbsp;</Col>
      <Col span="8">aaaaaaaaaa<br/>aaaaaaaaa<br/>aaaaaaaaaaaaaaaaaaaaa</Col>
      <Col span="8">&nbsp;</Col>
      <Col span="8">&nbsp;</Col>
    </Row>
    <br/>
    <Row style="height: 20%">
      <Col span="1" >&nbsp;</Col>
      <Col span="2" ><Button icon='md-contact' class="buttoncenter" type="primary" shape="circle" to="/login">登录</Button></Col>
      <Col span="2" ><Button icon='ios-hammer' class="buttoncenter" shape="circle" to="http:///www.ooowl.fun">作者的blog</Button></Col>
      <Col span="2" ><Button icon='md-bookmarks' class="buttoncenter" shape="circle" to="http:///www.ooowl.fun:82">使用说明</Button></Col>
      <Col span="2" ><Button icon='logo-github' class="buttoncenter" shape="circle" to="https:///github.com/Castleeee/justdoit_front">github</Button></Col>
      <Col span="15"></Col>

    </Row>
      <Row >
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
    width: 100%;
    height: 100%;
    border-radius: 5px;
    float: right;
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
  font-size:20px;
    font-weight:bold;
  color: #ffffff;
  }

  .hrefTexe{
    font-size:20px;

    /*font-weight:bold;*/
    color: #ffffff;

  }
</style>
