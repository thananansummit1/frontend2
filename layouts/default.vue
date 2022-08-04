<template>
  <div>
    <Topbar />
    <nuxt />
  </div>
</template>

<script>
import Topbar from '~/components/global/Topbar.vue'
export default {
  components: {
    Topbar,
  },
  data: function () {
    return {}
  },
}
</script>

<style></style>
