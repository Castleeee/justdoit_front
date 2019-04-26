<template>
    <div class="full">
      <div :style=bg_img
      class="full">
      <login-card style="padding-top: 5%"></login-card>
      </div>
    </div>
</template>

<script>
import loginCard from '@/components/user/loginCard.vue'
export default {
  components: {
    loginCard
  },
  name: 'Login',
  data () {
    return {
      bg_img: {
        backgroundImage: 'url(' + require('../../assets/user/mountain.jpg') + ') ',
        backgroundPosition: 'right right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

      }
    }
  }
}
</script>

<style scoped>
.full{
  height: 100%;
}
</style>
