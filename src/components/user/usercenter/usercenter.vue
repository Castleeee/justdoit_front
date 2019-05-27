<template style="height: 100%;width: 100%;overflow: hidden;">
  <div class="full">
    <div :style=bg_img
         class="full">
  <LogoutButton></LogoutButton>
    </div>
  </div>
</template>

<script>
import LogoutButton from '@/components/user/login/LogoutButton.vue'
export default {
  components: {
    LogoutButton
  },
  name: 'usercenter',
  data () {
    return {
      bg_img: {
        backgroundImage: 'url(' + require('../../../assets/user/mountain.jpg') + ') ',
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
