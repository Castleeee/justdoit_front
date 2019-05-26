<template style="height: 100%;width: 100%;overflow: hidden;">
  <div class="full">
    <div :style=bg_img
         class="full">

    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  name: 'usercenter',
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

  }
</style>
