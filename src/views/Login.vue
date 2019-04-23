<template>
  <div style="height: 960px">
    <!--<img src="../assets/ocean-turtle.jpg" style='height: 100%;width:100%;'>-->
    <Card style="margin: 5% auto;height: 60%;width:40%;">
      <p slot="title"
         v-if="singup" >
        注册
      </p>
      <p slot="title"
         v-else>
        登录
      </p>
      <div>
        <Button v-show="singup">登录</Button>
        <Button @click="switchsing">注册</Button>

      </div>

    </Card>
  </div>
</template>

<script>
export default {

  name: 'login',
  data () {
    return {
      singup: true
    }
  },
  methods: {
    switchsing () {
      this.singup = false
    }
  }
}
</script>

<style scoped>
#loginbackground{
  margin-bottom: 0px;
  height: 100%;
  width: 100%;
  background: url("../assets/ocean-turtle.jpg");
}
</style>
