<template>
  <div>
    <a :href="vkAuthRedirect" target="_blank"> Авторизоваться в ВК </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AuthPage',
  data() {
    const { vkClientId, vkAuthCallback, vkScope } = this.$config
    const state = Math.random().toString(36).substring(2)
    return {
      vkAuthRedirect: `https://oauth.vk.com/authorize?client_id=${vkClientId}&display=page&redirect_uri=${vkAuthCallback}&scope=${vkScope}&response_type=token&v=5.130&state=${state}`,
    }
  },
  mounted() {},
})
</script>
