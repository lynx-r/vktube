<template>
  <div>
    <RecommendedVideos />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomePage',

  computed: {
    mainSearch() {
      return this.$accessor.search.mainSearch
    },
    accessToken() {
      return this.$storage.getCookie('accessToken')
    },
  },

  watch: {
    mainSearch(val) {
      this.$vkApi.video
        .search({ q: val, accessToken: this.accessToken })
        .then((r) => {
          this.$accessor.search.setSearchResult(r)
        })
    },
  },
})
</script>
