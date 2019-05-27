<template style="height: 100%;width: 100%;overflow: hidden;">
  <div class="full">
    <div :style=bg_img
         class="full">
      找回密码界面1
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  name: 'backVlidateEmali',
  data () {
    return {
      bg_img: {
        backgroundImage: 'url(' + require('../../assets/user/mountain.jpg') + ') ',
        backgroundPosition: 'right right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden'
      }
    }
  }

}
</script>

<style scoped>
  .full{
    height: 100%;
    width: 100%;
    overflow: hidden
  }
</style>
