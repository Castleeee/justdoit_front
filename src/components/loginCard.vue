<template>
  <div>
    <Card style="height:7%;width:40%;margin:auto;">
      <div
        v-if="singup"
        style="height: 10%;font-size: 20px">
        注册

      </div>
      <div
        v-else
        style="height: 10%;font-size: 20px">
        登录
      </div>
<!-- 上面是标签 -->
      <Divider>·</Divider>
      <br/> <br/> <br/>

      <label>账户:
        <Input size="large"
               style="width: 72%;"
               v-model="usernumber"
               placeholder="账号"/>
      </label>
      <br/>
      <br/>
      <br/>
      <label>密码:
        <Input size="large"
               style="width: 72%;"
               v-model="passwd"
               placeholder="密码"/>
      </label>
      <br v-if="singup" />
      <br v-if="singup" />
      <br v-if="singup" />
      <label v-if="singup">确认:
        <Input
               size="large"
               style="width: 72%;"
               v-model="repasswd"
               placeholder="再次输入密码" />
      </label>
      <br v-if="singup" />
      <br v-if="singup" />
      <br v-if="singup" />
      <label v-if="singup">邮箱:
        <Input size="large"
               style="width: 72%;"
               v-model="emali"
               placeholder="你的邮箱"/>
      </label>
      <br/>
      <br/>
      <br/>
      <br/>
<!-- 上面是表单，根据singup的值变化判断是登陆还是注册 -->
      <div style="margin-bottom: 7%;"
           v-if="singup">
        <Button style="width: 60%"
                type="success"
                @click="doRegeist">注册
        </Button>
        <br><br>
        <Button @click="switchsing"
                style="width: 60%"
                type="warning">返回
        </Button>
      </div>
      <div style="margin-bottom: 7%;"
           v-else>
        <Button style="width: 60%"
                type="primary"
                @click="doLogin">登录
        </Button>
        <br><br>
        <Button @click="switchsing"
                style="width: 60%"
                type="success">注册
        </Button>
      </div>
<!-- 上面是按钮，切换登陆状态执行逻辑 -->
    </Card>
  </div>

</template>

<script>
export default {

  name: 'loginCard',
  data () {
    return {
      usernumber: '', // 用户名
      passwd: '', // 密码
      repasswd: '', // 确认密码
      emali: '', // 邮箱
      singup: true// 是否为注册

    }
  },
  methods: {
    switchsing () { // 切换注册还是登录
      this.singup = !this.singup
    },
    doLogin () { // 登陆逻辑
      console.log('Login')
    },
    doRegeist () { // 注册逻辑
      if (this.passwd !== this.repasswd) { // 判断确认密码和密码是否一样
        alert('两次输入密码不一致！')
      }
      console.log('Regeist')
    }
  }
}
</script>

<style scoped>

</style>
