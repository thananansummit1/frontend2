<template>
  <div>
    <span class="test">to be continued</span>
  </div>
</template>

<script>
export default {
  layout(context) {
    return 'landding'
  },
  mounted() {
    const token =
      window.localStorage.getItem('token') || this.$store.getters.token
    if (token) {
      this.redirect()
    } else {
      this.$router.replace({
        name: 'login',
      })
    }
  },
  methods: {
    redirect() {
      this.$router.replace({
        name: 'admin-dashboard',
      })
    },
  },
}
</script>
