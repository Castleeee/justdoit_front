<template>
  <div style="width: 100%;height: 100%;">
  <div :class="{home1:isHomePage,word:isWordPage,todo:isTodoPage,info:isInfoPage}">
    <div :class="{home2:isHomePage}" style="height: 100%;width: 100%;">

    <Row type="flex" align="middle" style="height: 18%" >
      <Col span="1">&nbsp;</Col>
      <Col span="1"><img class="logo" src="../assets/all/paper-plane.svg" alt=" ：）" /></Col>
      <Col span="1">&nbsp;</Col>
      <Col span="4"><B  style="color:#2b85e4;font-size: 39px" class="hrefTexe">Just Do It</B></Col>
      <Col span="5">&nbsp;</Col>

      <!--首页渲染-->
      <Col span="2" v-if="isHomePage" >
        <B
          @click="switchPage('home')"
          style="color:#2b85e4;cursor: pointer"
          class="hrefTexe">Home</B>
      </Col>
      <Col span="2" v-if="isHomePage">
        <B @click="switchPage('todo')"
          style="color:#2b85e4;cursor: pointer"
          class="hrefTexe">打卡签到</B>
      </Col>
      <Col span="2" v-if="isHomePage">
        <B @click="switchPage('word')"
          style="cursor: pointer"
          class="hrefTexe">今日单词</B>
      </Col>
      <Col span="2" v-if="isHomePage">
        <B @click="switchPage('info')"
          style="cursor: pointer"
          class="hrefTexe">信息推送</B>
      </Col>
      <!--首页渲染 -->

      <!--单词页渲染-->
      <Col span="2" v-if="isWordPage">
        <B>&nbsp;</B>
      </Col>
      <Col span="2" v-if="isWordPage">
        <B @click="switchPage('home')"
          style="color:#2b85e4;cursor: pointer"
          class="hrefTexe">Home</B></Col>
      <Col span="2" v-if="isWordPage">
        <B @click= "goinner('/word/today')"
          style="color:#2b85e4;cursor: pointer"
          class="hrefTexe">今日单词</B>
      </Col>
      <Col span="2" v-if="isWordPage">
        <B @click= "goinner('/word/mine')"
          style="color:#2b85e4;cursor: pointer"
          class="hrefTexe">管理词库</B>
      </Col>

      <!--单词页渲染-->

      <!--todo页渲染-->
      <Col span="2" v-if="isTodoPage">
        <B>&nbsp;</B>
      </Col>
      <Col span="2" v-if="isTodoPage">
        <B @click="switchPage('home')"
          style="color:#2b85e4;cursor: pointer"
          class="hrefTexe">Home</B></Col>
      <Col span="2" v-if="isTodoPage">
        <B @click= "goinner('/todo/today')"
          style="color:#2b85e4;cursor: pointer"
          class="hrefTexe">今日待办</B>
      </Col>
      <Col span="2" v-if="isTodoPage">
        <B @click= "goinner('/todo/chart')"
          style="color:#2b85e4;cursor: pointer"
          class="hrefTexe" >统计报表</B>
      </Col>

      <!--todo页渲染-->

      <!--信息流页渲染-->
      <Col span="2" v-if="isInfoPage">
        <B>&nbsp;</B>
      </Col>
      <Col span="2" v-if="isInfoPage" >
        <B
          @click="switchPage('home')"
          style="color:#2b85e4;cursor: pointer"
          class="hrefTexe">Home</B></Col>
      <Col span="2" v-if="isInfoPage">
        <B @click="goinner('/info/today')"
          style="color:#2b85e4;cursor: pointer"
          class="hrefTexe">今日信息</B>
      </Col>
      <Col span="2" v-if="isInfoPage">
        <B @click="goinner('/info/custom')"
          style="color:#2b85e4;cursor: pointer"
          class="hrefTexe">定制信息流</B>
      </Col>

      <!--信息流页渲染-->

      <Col span="3">
        <Button  class="button" type="primary" shape="circle"  to="/login">
          <B class="buttontext">Sing in</B></Button></Col>
      <Col span="1"></Col>
    </Row>
    <br/>
    <Row type="flex" align="bottom" style="height: 40%">
      <Col span="1">&nbsp;</Col>
      <!--首页渲染-->
      <Col span="10" class="centertext" v-if="isHomePage" >没想好写什么<br/>不过呢🌌<br/>这排版随便写也很帅</Col>
      <!--首页渲染-->

      <!--单词页渲染-->
      <Col span="10" class="centertext" v-if="isWordPage" >Focus on Less<br/>We only have Words</Col>
      <!--单词页渲染-->

      <!--todo页渲染-->
      <Col span="10" class="centertext" v-if="isTodoPage" >If not Now,When ?<br/>If not you,Who ?</Col>
      <!--todo页渲染-->

      <!--info页渲染-->
      <Col span="10" class="centertext" v-if="isInfoPage" >🍺来杯啤酒吧<br/>你想要的，一应俱全<br/></Col>
      <!--info页渲染-->

      <Col span="6">&nbsp;</Col>
      <Col span="8">&nbsp;</Col>
    </Row>
    <br/>
    <Row style="height: 20%">
      <Col span="1" >&nbsp;</Col>
      <!-- 首页渲染 -->
      <Col span="2" v-if="isHomePage" >
        <Button icon='md-contact' class="buttoncenter" type="primary" shape="circle" to="/login">登录</Button></Col>
      <Col span="2" v-if="isHomePage" >
        <Button icon='ios-hammer' class="buttoncenter" shape="circle" @click="goouter('http:///www.ooowl.fun')">作者的blog</Button></Col>
      <Col span="2" v-if="isHomePage" >
        <Button icon='md-bookmarks' class="buttoncenter" shape="circle" @click="goouter('http:///www.ooowl.fun:82')">使用说明</Button></Col>
      <Col span="2" v-if="isHomePage" >
        <Button icon='logo-github' class="buttoncenter" shape="circle" @click="goouter('https:///github.com/Castleeee/justdoit_front')">github</Button></Col>
      <!-- 首页渲染 -->

      <!-- 单词页渲染 -->

      <Col span="2" v-if="isWordPage" >
        <Button icon="ios-book" class="buttoncenter" type="primary" shape="circle" to="/word">开始使用</Button>
      </Col>
      <Col span="2" v-if="isWordPage" >
        <Button icon='md-contact' class="buttoncenter" shape="circle" to="/login">账户</Button>
      </Col>
      <Col span="2" v-if="isWordPage" >
        <Button icon='logo-android' class="buttoncenter" shape="circle" @click="goinner('/appdown')">手机APP</Button>
      </Col>
      <Col span="2" v-if="isWordPage" >&nbsp;</Col>
      <!-- 单词页渲染 -->

      <!-- todo页渲染 -->

      <Col span="2" v-if="isTodoPage" >
        <Button icon='md-checkbox' class="buttoncenter" type="primary" shape="circle" to="/todo">开始使用</Button>
      </Col>
      <Col span="2" v-if="isTodoPage" >
        <Button icon='md-contact' class="buttoncenter" shape="circle" to="/login">账户</Button>
      </Col>
      <Col span="2" v-if="isTodoPage" >
        <Button icon='logo-android' class="buttoncenter" shape="circle" @click="goinner('/appdown')">手机APP</Button>
      </Col>
      <Col span="2" v-if="isWordPage" >&nbsp;</Col>
      <!-- todo页渲染 -->

      <!-- 信息页渲染 -->

      <Col span="2" v-if="isInfoPage" >
        <Button icon="md-beer" class="buttoncenter" type="primary" shape="circle" to="/info">开始使用</Button>
      </Col>
      <Col span="2" v-if="isInfoPage" >
        <Button icon='md-contact' class="buttoncenter" shape="circle" to="/login">账户</Button>
      </Col>
      <Col span="2" v-if="isInfoPage" >
        <Button icon='logo-android' class="buttoncenter" shape="circle" @click="goinner('/appdown')" >手机APP</Button>
      </Col>
      <Col span="2" v-if="isWordPage" >&nbsp;</Col>
      <!-- 信息页渲染 -->

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
  data () {
    return {
      isHomePage: true,
      isWordPage: false,
      isTodoPage: false,
      isInfoPage: false
    }
  },
  components: {
  },
  methods: {
    switchPage (page) {
      if (page === 'word') {
        this.isHomePage = false
        this.isWordPage = true
        this.isTodoPage = false
        this.isInfoPage = false
      }
      if (page === 'todo') {
        this.isHomePage = false
        this.isWordPage = false
        this.isTodoPage = true
        this.isInfoPage = false
      }
      if (page === 'home') {
        this.isHomePage = true
        this.isWordPage = false
        this.isTodoPage = false
        this.isInfoPage = false
      }
      if (page === 'info') {
        this.isHomePage = false
        this.isWordPage = false
        this.isTodoPage = false
        this.isInfoPage = true
      }
    },
    goouter (e) {
      window.location.href = e
    },
    goinner (e) {
      this.$router.push({ path: e })
    }
  }
}
</script>
<style scoped>
  .home1{

    height: 100%;
    width: 100%;
    background:url("../assets/all/home1.svg") no-repeat right center;

  }

  .word{

    height: 100%;
    width: 100%;
    background:url("../assets/word/word.svg") no-repeat right center;

  }
  .todo{

    height: 100%;
    width: 100%;
    background:url("../assets/todo/todo.svg") no-repeat right center;

  }
  .info{

    height: 100%;
    width: 100%;
    background:url("../assets/info/info.svg") no-repeat right center;

  }
  .home2{

    height: 100%;
    width: 100%;
    background:url("../assets/all/home2.svg") no-repeat left bottom;
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
    color: #ffffff;

  }
  .centertext{
    text-align: left;
    color: #2d8cf0;
    font-size: 50px;
  }
</style>
