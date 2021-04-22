<template>
  <div>
    <div>Найдено всего видео: {{ videos.count }}</div>
    <VideoCard v-for="item of videos.items" :key="item.id" :video="item" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { SearchResult } from '~/plugins/vk-api/repo/VideoRepository'

export default Vue.extend({
  name: 'List',
  computed: {
    videos() {
      return this.$accessor.search.searchResult as SearchResult
    },
  },
})
</script>
