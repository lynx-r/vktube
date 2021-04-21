<template>
  <div />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VkAuthCallback',
  mounted() {
    const match = this.$route.hash.match(/access_token=(\w+)&/)
    if (match) {
      const accessToken = match[1]
      this.$storage.setCookie('accessToken', accessToken)
      this.$router.push('/')
    }
  },
})
</script>
