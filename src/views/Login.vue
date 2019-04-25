<template>
    <div class="my">
      <div :style=bg_img
      class="my">
      <login-card style="padding-top: 5%"></login-card>
      </div>
    </div>
</template>

<script>
import loginCard from '@/components/loginCard.vue'
export default {
  components: {
    loginCard
  },
  name: 'Login',
  data () {
    return {
      bg_img: {
        backgroundImage: 'url(' + require('../assets/mountain.jpg') + ') ',
        backgroundPosition: 'right right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

      }
    }
  }
}
</script>

<style scoped>
.my{
  height: 100%;
}
</style>
