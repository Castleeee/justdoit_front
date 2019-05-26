<template>
  <div>
  <Button type="primary" shape="circle" @click="modal1 = true">LogOut</Button>
  <Modal
    v-model="modal1"
    title="Common Modal dialog box title"
    @on-ok="ok"
    @on-cancel="cancel">

  </Modal>
  </div>
</template>
<script>
export default {
  name: 'LogoutButton',
  data () {
    return {
      modal1: false
    }
  },
  methods: {
    ok () {
      this.$Message.info('Clicked ok')
    },
    cancel () {
      this.$Message.info('Clicked cancel')
    }
  }
}
</script>

<style scoped>

</style>
