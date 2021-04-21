<template>
  <div />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VkAuthCallback',
  mounted() {
    const accessToken = this.$route.hash.match(/access_token=(\w+)&/)[1]
    this.$storage.setCookie('accessToken', accessToken)
    this.$router.push('/')
  },
})
</script>
